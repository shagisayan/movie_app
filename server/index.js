const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const db = require('./db')
const movieRouter = require('./routes/movie-router')

const app = express()
const apiPort = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', movieRouter)

app.use(express.static('./build'));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
