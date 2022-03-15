const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')

mongoose.connect(process.env.MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false })


const { cartRoutes } = require('./routes')
const server = express()
server.use(express.json({limit: '50mb'}));
server.use(express.urlencoded({limit: '50mb', extended: true}));
server.use("/api", express.static(__dirname))
server.use(cors())

server.use("/api/carts", cartRoutes)

server.get('/api/testConnection', (req, res) => {
  console.log("request at /testConnection")
  res.status(200).end()
});

server.listen(process.env.PORT, () => {
  console.log(`server started at port ${process.env.PORT}`)
})