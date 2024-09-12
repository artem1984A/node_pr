// Define an array of modifier names
const MODIFIER_NAMES = ['swap', 'write', 'fill']

// Define a class called ImmutableBuffer
export class ImmutableBuffer {
  // Define the constructor method that takes in a size and an executor function
  constructor (size, executor) {
    // Create a new buffer of the specified size
    const buffer = Buffer.alloc(size)

    // Create an empty object to store the modifiers
    const modifiers = {}

    // Iterate over each property in the buffer
    for (const prop in buffer) {
      // Check if the property is not a function
      if (typeof buffer[prop] !== 'function') {
        continue
      }

      // Check if the property starts with any of the modifier names
      if (MODIFIER_NAMES.some(m => prop.startsWith(m))) {
        // If it does, bind the property to the buffer and store it in the modifiers object
        modifiers[prop] = buffer[prop].bind(buffer)
      } else {
        // If it doesn't, bind the property to the buffer itself
        this[prop] = buffer[prop].bind(buffer)
      }
    }

    // Call the executor function with the modifiers object as an argument
    executor(modifiers)
  }
}
