const express = require('express')
const server = express()
const postsRouter = require('./posts/posts-router')

server.use(express.json())
server.use(cors())
server.use('/api/posts', postsRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Lambda Posts API</h2>`)
})

module.exports = server