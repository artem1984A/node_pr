import chalk from 'chalk';

// Import the 'chalk' library for colorful console output

// Define a function called 'sayHello' that takes in a 'name' parameter
export function sayHello(name) {
  // Return a string that says "Hello" followed by the 'name' parameter,
  // with the 'name' parameter colored in green using the 'chalk.green' function
  return `Hello ${chalk.green(name)}`;
}
