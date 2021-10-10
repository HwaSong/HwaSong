//http://expressjs.com/en/starter/hello-world.html

const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Jeonghwa:s1537979@boilerplate.onixv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true
}).then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err))




app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요~')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})