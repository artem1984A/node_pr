import { SubsetSum } from '../subsetSum.js'

/**
 * This script runs as a separate worker process and performs subset sum calculations.
 * It listens for messages from the parent process and sends back events and data accordingly.
 */

// Import the SubsetSum class from the '../subsetSum.js' file

// Listen for messages from the parent process
process.on('message', msg => {
  // Create a new instance of the SubsetSum class with the sum and set values from the message
  const subsetSum = new SubsetSum(msg.sum, msg.set)

  // When a match event occurs in the subsetSum instance, send the event and data back to the parent process
  subsetSum.on('match', data => {
    process.send({ event: 'match', data: data })
  })

  // When the subsetSum instance ends, send the event and data back to the parent process
  subsetSum.on('end', data => {
    process.send({ event: 'end', data: data })
  })

  // Start the subsetSum calculation
  subsetSum.start()
})

// Send a 'ready' message to the parent process
process.send('ready')
