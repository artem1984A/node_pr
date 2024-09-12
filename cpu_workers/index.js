// Import the necessary modules from Node.js and local files
import { createServer } from 'http'; // Import the HTTP module to create a server
import { SubsetSum } from './subsetSum.js'; // Import the SubsetSum class for solving subset sum problems
// Alternative implementations of SubsetSum for different scenarios (commented out)
// import { SubsetSum } from './subsetSumDefer.js';
// import { SubsetSum } from './subsetSumFork.js';
// import { SubsetSum from './subsetSumThreads.js';

// Create an HTTP server
createServer((req, res) => {
  // Parse the request URL to work with its parts easily
  const url = new URL(req.url, 'http://localhost');

  // Check if the request is not targeting the subsetSum path
  if (url.pathname !== '/subsetSum') {
    // Respond with a simple alive message for non-subsetSum requests
    res.writeHead(200); // Set HTTP status code to 200 (OK)
    return res.end('I\'m alive!\n'); // End the response with a message
  }

  // Extract 'data' and 'sum' parameters from the URL, assuming they are JSON encoded
  const data = JSON.parse(url.searchParams.get('data')); // Parse the 'data' parameter from the URL
  const sum = JSON.parse(url.searchParams.get('sum')); // Parse the 'sum' parameter from the URL

  // Prepare the response header
  res.writeHead(200); // Set HTTP status code to 200 (OK)

  // Initialize a new SubsetSum instance with the provided sum and data
  const subsetSum = new SubsetSum(sum, data);

  // Listen for 'match' events from the SubsetSum instance
  subsetSum.on('match', match => {
    // Write each match to the response
    res.write(`Match: ${JSON.stringify(match)}\n`);
  });

  // Listen for the 'end' event to finalize the response
  subsetSum.on('end', () => res.end()); // End the response when SubsetSum finishes processing

  // Start the SubsetSum processing
  subsetSum.start();
}).listen(8000, () => console.log('Server started')); // Listen on port 8000 and log when the server starts