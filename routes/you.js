const express = require('express')
const router = express.Router()
const expressValidator = require('express-validator')
const HighScoreService = require('../services/highScore-service')

router.get('/', async(req, res, next) => {
    res.send(await "You are so cool!!")
        // res.send(await HighScoreService.findAll())
})

module.exports = router