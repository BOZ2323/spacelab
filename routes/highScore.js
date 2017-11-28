const express = require('express')
const router = express.Router()

const HighScoreService = require('../services/highScore-service')

router.get('/', async(req, res, next) => {
        res.send(await HighScoreService.findAll())
    })
    //***************** */
    // router.get('/congrats', async(req, res, next) => {
    //     res.render(await 'congrats', { title: 'congrats!' });
    // });


//*************** */

router.get('/all', async(req, res, next) => {
    const scores = await HighScoreService.findAll()
    res.render('highScore-list', { scores })
})

router.get('/:id', async(req, res, next) => {
    const highScore = await HighScoreService.find(req.params.id)

    res.render('highScore-detail', { highScore })
})

router.post('/:highScoreId/team', async(req, res, next) => {
    const highScore = await HighScoreService.find(req.params.highScoreId)
    const target = await HighScoreService.find(req.body.targetId)
    highScore.team.addToSet(target) //it is mongodb directed, this way the records become unique, each ID is only listed once
    target.team.addToSet(highScore)
    await target.save()
    const updatedHighScore = await highScore.save()
    res.send(updatedHighScore)
})

router.post('/', async(req, res, next) => {
        const highScore = await HighScoreService.add(req.body)

        res.send(highScore)

    })
    //***************************************** */
    // router.post('/', async(req, res, next) => {
    //         const nickName = await nickName.add(req.body)
    //         console.log("got nickname", req.body)
    //         res.send(highScore)

//     })
//****************************************** */
router.delete('/:id', async(req, res, next) => {
    await HighScoreService.del(req.params.id)

    res.send('ok!')
})

module.exports = router