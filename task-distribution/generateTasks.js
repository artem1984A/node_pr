export function * generateTasks (searchHash, alphabet,
  maxWordLength, batchSize) {
  let nVariations = 0
  for (let n = 1; n <= maxWordLength; n++) {
    nVariations += Math.pow(alphabet.length, n)
  }
  console.log('Finding the hashsum source string over ' +
    `${nVariations} possible variations`) // 1: Logging the number of possible variations

  let batchStart = 1
  while (batchStart <= nVariations) {
    const batchEnd = Math.min(
      batchStart + batchSize - 1, nVariations) // 2: Calculating the end index of the current batch
    yield {
      searchHash,
      alphabet: alphabet,
      batchStart,
      batchEnd
    }

    batchStart = batchEnd + 1 //3: Updating the start index for the next batch
  }
}
