import { parentPort } from 'worker_threads' // Importing the parentPort object from the worker_threads module
import { SubsetSum } from '../subsetSum.js' // Importing the SubsetSum class from the subsetSum.js file

parentPort.on('message', msg => { // Listening for messages from the parent thread
  const subsetSum = new SubsetSum(msg.sum, msg.set) // Creating a new instance of the SubsetSum class with the sum and set values received from the parent thread

  subsetSum.on('match', data => { // Listening for the 'match' event emitted by the SubsetSum instance
    parentPort.postMessage({ event: 'match', data: data }) // Sending a message to the parent thread with the 'match' event and the data received from the 'match' event
  })

  subsetSum.on('end', data => { // Listening for the 'end' event emitted by the SubsetSum instance
    parentPort.postMessage({ event: 'end', data: data }) // Sending a message to the parent thread with the 'end' event and the data received from the 'end' event
  })

  subsetSum.start() // Starting the subset sum calculation
})
