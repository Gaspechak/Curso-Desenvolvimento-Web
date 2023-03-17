const http = require('http')

function handler(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('Hello World !')
    res.end()
}

const server = http.createServer(handler)

server.listen(3000)