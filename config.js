const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

require('./database-connection')

const app = express()

app.use(bodyParser.json())
app.use(cookieParser())
app.set('view engine', 'pug')

const highScore = require('./routes/highScore')

app.use('/highScore', highScore)

app.get('/', (req, res, next) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('Juhuuuu! Server listening.')
})