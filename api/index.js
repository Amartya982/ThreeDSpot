const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const routers = require('./routers')

const server = express()
mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false })


const { cartRouter, productRouter, userRouter, adminRouter, orderRouter } = routers
server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ limit: '10mb', extended: true }));
server.use("/api", express.static(__dirname))
server.use(cors())

server.use("/api/carts", cartRouter)
server.use("/api/products", productRouter)
server.use("/api/users", userRouter)
server.use("/api/admins", adminRouter)
server.use("/api/orders", orderRouter)

server.get('/api/ping', (req, res) => {
  console.log("ping request")
  res.status(200).end()
});

server.listen(process.env.PORT, () => {
  console.log(`server started at port ${process.env.PORT}`)
})