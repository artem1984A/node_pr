import { createServer } from 'http'
import { cpus } from 'os'
import cluster from 'cluster'

// Check if the current process is the master process
if (cluster.isMaster) {
  // Get the number of available CPUs
  const availableCpus = cpus()
  console.log(`Clustering to ${availableCpus.length} processes`)

  // Fork a worker process for each CPU
  availableCpus.forEach(() => cluster.fork())

  // Handle worker process crashes
  cluster.on('exit', (worker, code) => {
    // If the worker process crashed and didn't exit after disconnecting, start a new worker
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      console.log(`Worker ${worker.process.pid} crashed. Starting a new worker`)
      cluster.fork()
    }
  })
} else {
  // Simulate an error by throwing an exception after a random delay
  setTimeout(
    () => { throw new Error('Ooops') },
    Math.ceil(Math.random() * 3) * 1000
  )

  // Get the process ID of the current worker process
  const { pid } = process

  // Create an HTTP server
  const server = createServer((req, res) => {
    // Simulate a long-running operation
    let i = 1e7; while (i > 0) { i-- }

    // Log the handling of the request
    console.log(`Handling request from ${pid}`)

    // Send a response to the client
    res.end(`Hello from ${pid}\n`)
  })

  // Start the server and listen on port 8080
  server.listen(8080, () => console.log(`Started at ${pid}`))
}
