import { fork } from 'child_process' // Importing the `fork` function from 'child_process' module to create child processes.
import { connect } from 'net' // Importing the `connect` function from 'net' module to create a TCP connection.

function multiplexChannels (sources, destination) {
  let openChannels = sources.length // Keeps track of the number of open data streams (stdout and stderr in this case).
  
  // Loop through each source (data stream like stdout, stderr)
  for (let i = 0; i < sources.length; i++) {
    sources[i]
      .on('readable', function () { // Event handler for when data is available to be read from the source
        let chunk
        while ((chunk = this.read()) !== null) { // Read chunks of data while they are available
          const outBuff = Buffer.alloc(1 + 4 + chunk.length) // Allocate buffer to store data packet.
          outBuff.writeUInt8(i, 0) // Write the channel index (0 for stdout, 1 for stderr) at the first byte.
          outBuff.writeUInt32BE(chunk.length, 1) // Write the chunk size (4 bytes, big-endian) right after the index.
          chunk.copy(outBuff, 5) // Copy the actual data into the buffer starting from the 5th byte.
          
          console.log(`Sending packet to channel: ${i}`) // Log to indicate which channel the data is being sent from.
          destination.write(outBuff) // Write the buffer (data packet) to the destination (TCP connection).
        }
      })
      .on('end', () => { // Event handler for when the source stream ends (no more data to send).
        if (--openChannels === 0) { // Decrement the count of open channels and check if all are closed.
          destination.end() // If all channels are closed, close the destination stream (TCP connection).
        }
      })
  }
}

// Create a TCP connection to port 3000
const socket = connect(3000, () => {
  
  // Fork a child process, running the script provided in the command line arguments
  const child = fork(
    process.argv[2], // The script to execute in the child process.
    process.argv.slice(3), // Additional arguments passed to the script.
    { silent: true } // Silence the child process so we can manually handle stdout and stderr.
  )
  
  // Multiplex the stdout and stderr of the child process into the socket connection.
  multiplexChannels([child.stdout, child.stderr], socket)
})