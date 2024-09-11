import { createWriteStream } from 'fs' // Import the `createWriteStream` function from the 'fs' module to write to files.
import { createServer } from 'net' // Import the `createServer` function from the 'net' module to create a TCP server.

function demultiplexChannel (source, destinations) {
  let currentChannel = null // Holds the current channel (e.g., stdout, stderr) being read from.
  let currentLength = null // Holds the current length of the data chunk being read.

  source
    .on('readable', () => { //  Event handler for when the source (socket) has data available to be read.
      let chunk
      // If no current channel is selected, read the first byte to determine the channel (e.g., stdout = 0, stderr = 1)
      if (currentChannel === null) { // 
        chunk = source.read(1) // Read 1 byte, which is the channel index.
        currentChannel = chunk && chunk.readUInt8(0) // Set the currentChannel to the channel index.
      }

      // If no current length is set, read the next 4 bytes to determine the length of the data chunk.
      if (currentLength === null) { //  
        chunk = source.read(4) // Read 4 bytes, which represent the length of the data.
        currentLength = chunk && chunk.readUInt32BE(0) // Set the currentLength to the data length.
        if (currentLength === null) {
          return null // Return if no valid length is read.
        }
      }

      // Read the data chunk with the length we just determined.
      chunk = source.read(currentLength) //  
      if (chunk === null) {
        return null // Return if there's no chunk available to read.
      }

      console.log(`Received packet from: ${currentChannel}`) // Log the channel that sent the data.
      destinations[currentChannel].write(chunk) //  Write the chunk to the corresponding destination (stdout or stderr log).
      
      // Reset currentChannel and currentLength for the next data chunk.
      currentChannel = null
      currentLength = null
    })
    .on('end', () => { //  Event handler for when the source stream ends (no more data).
      destinations.forEach(destination => destination.end()) // Close all destination streams (stdout.log, stderr.log).
      console.log('Source channel closed') // Log that the source channel has closed.
    })
}

// Create a TCP server that listens for incoming connections.
const server = createServer((socket) => {
  // Create write streams for stdout and stderr logs.
  const stdoutStream = createWriteStream('stdout.log')
  const stderrStream = createWriteStream('stderr.log')

  // Pass the socket and the write streams to the demultiplexChannel function.
  demultiplexChannel(socket, [stdoutStream, stderrStream])
})

// Start the server on port 3000.
server.listen(3000, () => console.log('Server started'))