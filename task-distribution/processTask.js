import isv from 'indexed-string-variation' // Importing the 'indexed-string-variation' module
import { createHash } from 'crypto' // Importing the 'createHash' function from the 'crypto' module

export function processTask (task) { // Defining the 'processTask' function and passing 'task' as a parameter
  const variationGen = isv.generator(task.alphabet) // Creating a generator function using 'isv.generator' from the 'indexed-string-variation' module

  console.log('Processing from ' +
    `${variationGen(task.batchStart)} (${task.batchStart}) ` +
    `to ${variationGen(task.batchEnd)} (${task.batchEnd})`) // Logging the range of values being processed

  for (let idx = task.batchStart; idx <= task.batchEnd; idx++) { // Looping through the range of values
    const word = variationGen(idx) // Generating a word using the generator function
    const shasum = createHash('sha1') // Creating a hash object using 'createHash' function with 'sha1' algorithm
    shasum.update(word) // Updating the hash object with the generated word
    const digest = shasum.digest('hex') // Generating the hash digest in hexadecimal format

    if (digest === task.searchHash) { // Checking if the generated hash digest matches the search hash
      return word // Returning the word if a match is found
    }
  }
}
