const http = require('http')
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome our home page')
    return
  }
  if (req.url === '/about') {
    res.end('welcome our about page')
    return
  }
  res.end(`oops`)
})

server.listen(5000)
