import nunjucks from 'nunjucks'

// Import the 'nunjucks' module

// Define the template string
const template = '<h1>Hello <i>{{ name }}</i></h1>'

// Export the 'sayHello' function
export function sayHello (name) {
  // Render the template using the 'nunjucks' module and the provided 'name' parameter
  return nunjucks.renderString(template, { name })
}
