/**
 * This is the main server file for the module_swapper project.
 * It imports the `sayHello` function from the `say-hello.js` module
 * and logs the result of calling `sayHello` with the argument 'Node.js'.
 */
import { sayHello } from './say-hello.js'

console.log(sayHello('Node.js'))
