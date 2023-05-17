const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Node/Express World!!!')
})

app.listen(3000)