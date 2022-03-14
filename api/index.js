const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')

mongoose.connect(process.env.MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false })


const {studentRoute, teacherRoute, classRoute, resultRoute, imageRoute, adminRoute, termRoute, sessionRoute} = require('./routes')
const server = express()
server.use(express.json({limit: '50mb'}));
server.use(express.urlencoded({limit: '50mb', extended: true}));
server.use("/api", express.static(__dirname))
server.use(cors())
server.use("/api/admins", adminRoute)
server.use("/api/students", studentRoute)
server.use("/api/teachers", teacherRoute)
server.use("/api/classes", classRoute)
server.use("/api/results", resultRoute)
server.use("/api/images", imageRoute)
server.use("/api/term", termRoute)
server.use("/api/session", sessionRoute)

server.get('/api/testConnection', (req, res) => {
  console.log("request at /testConnection")
  res.status(200).end()
});

server.listen(process.env.PORT, () => {
  console.log(`server started at port ${process.env.PORT}`)
})