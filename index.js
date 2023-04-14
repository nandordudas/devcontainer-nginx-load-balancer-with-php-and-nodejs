import { createServer } from 'node:http'

const host = '0.0.0.0'
const port = 3333

const server = createServer((_req, res) => {
  res
    .setHeader('Content-Type', 'text/html')
    .setHeader('Access-Control-Allow-Origin', '*')
    .writeHead(200)
    .end(`Hello from Node.js ${process.version}`)
})

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
