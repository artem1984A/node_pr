/**
 * Main function that sets up the ZeroMQ sink and listens for messages from workers.
 * @returns {Promise<void>} A promise that resolves when the main function completes.
 */
import zmq from 'zeromq'

async function main () {
  const sink = new zmq.Pull()
  await sink.bind('tcp://*:5017')

  for await (const rawMessage of sink) {
    console.log('Message from worker: ', rawMessage.toString())
  }
}

main().catch(err => console.error(err))
