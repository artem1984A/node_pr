import { createConnection } from 'net';
import { createReadStream } from 'fs';
import { createCipheriv, randomBytes } from 'crypto';
import { pipeline } from 'stream';
import { basename } from 'path';
import { spawn } from 'child_process';
import multiplex from 'multiplex';
import { appendFileSync } from 'fs';

// AES-192 requires a 24-byte key
const algorithm = 'aes192';

// Generate a secure 24-byte key for AES-192 encryption
const secret = randomBytes(24); // This generates 24 random bytes for the key
const hexKey = secret.toString('hex'); // Convert the key to a hex string for logging and storage
console.log(`Generated secret: ${hexKey}`);

// Prepare the key data to be written to the file with a newline character
const data = `${hexKey}\n`;

// Write the key to the key.txt file using a child process
const writeKeyToFile = (data) => {
  const child = spawn('node', ['-e', `
    const fs = require('fs');
    fs.appendFileSync('key.txt', '${data}');
  `]);

  child.on('exit', (code) => {
    if (code === 0) {
      console.log('Key successfully appended to key.txt');
    } else {
      console.error(`Child process exited with code ${code}`);
    }
  });
};

// Call the function to write the key to key.txt
writeKeyToFile(data);

// List of files to send (can be passed as command line arguments)
const files = process.argv.slice(2);

// Create a TCP connection to the server
const socket = createConnection({ port: 4000 }, () => {
  console.log('Connected to server');

  // Create a multiplex stream to handle multiple files
  const mx = multiplex();

  // Pipe the multiplex stream to the socket
  mx.pipe(socket);

  // Send each file as a separate stream
  files.forEach((file) => {
    const fileStream = createReadStream(file);
    const iv = Buffer.alloc(16, 0); // Initialization vector (use a real one in practice)
    const cipher = createCipheriv(algorithm, secret, iv); // Encrypt the file with AES-192 and IV

    // Create a new multiplex stream with the filename as the ID
    const stream = mx.createStream(basename(file));

    // Pipe the file through the cipher and into the multiplexed stream
    pipeline(fileStream, cipher, stream, (err) => {
      if (err) {
        console.error('Pipeline failed', err);
      } else {
        console.log(`File ${file} sent successfully`);
      }
    });
  });

  // End the socket when all files are sent
  mx.on('end', () => {
    socket.end();
  });
});

// Handle socket end
socket.on('end', () => {
  console.log('Disconnected from server');
});