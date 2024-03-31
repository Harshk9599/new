// console.log("hello this is server.js file.")


require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.listen(port, () => {
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})