import { createServer } from 'net';
import { createWriteStream } from 'fs';
import { createDecipheriv } from 'crypto';
import { pipeline } from 'stream';
import { basename, join } from 'path';
import { readFileSync } from 'fs';
import multiplex from 'multiplex';
import path from 'path'; // Correct way to import the path module in ES modules

// Function to fetch the last key from key.txt
const fetchLastKey = () => {
    try {
      // Resolve the path to the root directory and key.txt
      const filePath = resolve(__dirname, '../key.txt'); // Go one level up to access the root
  
      const data = readFileSync(filePath, 'utf8'); // Read the file as a string
      const keys = data.trim().split('\n'); // Split the content by new lines
      return keys[keys.length - 1]; // Return the last key
    } catch (error) {
      console.error('Error reading key.txt:', error);
      process.exit(1); // Exit if there's an error
    }
  };

// Fetch the latest encryption key from key.txt
const secretHex = fetchLastKey();
console.log(`Fetched secret from key.txt: ${secretHex}`);

if (!secretHex || secretHex.length !== 48) { // Ensure the key is 24 bytes in hexadecimal form
  console.error('Invalid or missing key in key.txt');
  process.exit(1);
}

const secret = Buffer.from(secretHex, 'hex'); // Convert the hex string to a Buffer
const algorithm = 'aes192';

// Create a TCP server
const server = createServer((socket) => {
  console.log('Client connected');

  // Create a multiplex stream to handle multiple file streams
  const mx = multiplex();

  // Pipe the incoming socket data into the multiplexing stream
  socket.pipe(mx);

  // For each incoming stream (representing a file), handle it separately
  mx.on('stream', (stream, id) => {
    console.log(`Receiving file stream: ${id}`);

    // Decrypt the stream if necessary
    const iv = Buffer.alloc(16, 0); // Initialization vector (use a real one in practice)
    const decipher = createDecipheriv(algorithm, secret, iv); // Decrypt with the secret key

    // Write the file to the 'received_files' folder
    const filePath = join('received_files', basename(id));
    const writeStream = createWriteStream(filePath);

    // Pipe the encrypted file stream through the decipher and save it to disk
    pipeline(stream, decipher, writeStream, (err) => {
      if (err) {
        console.error('Pipeline failed', err);
      } else {
        console.log(`File saved: ${filePath}`);
      }
    });
  });

  // Handle disconnection
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

// Start listening for incoming connections on port 4000
server.listen(4000, () => {
  console.log('Server listening on port 4000');
});