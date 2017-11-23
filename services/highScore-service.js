// const fs = require('fs')

// const highScoreModel = require('../models/highScore_model')

// const dbPath = `${__dirname}/../database.json`

// async function findAll() {
//     return new Promise((resolve, reject) => {
//         fs.readFile(dbPath, 'utf8', (err, file) => {
//             if (err) return reject(err)

//             const scores = JSON.parse(file).map(highScoreModel.create)

//             resolve(scores)
//         })
//     })
// }

// async function add(highScore) {
//     const allHighScores = await findAll()
//     const lastHighScore = allHighScores[allHighScores.length - 1]
//     const lastHighScoresId = lastHighScore && lastHighScore.id || 0
//     highScore.id = lastHighScoresId + 1

//     highScore = highScoreModel.create(highScore)
//     allHighScores.push(highScore)

//     await saveAll(allHighScores)

//     return highScore
// }

// async function del(highScoreId) {
//     const allHighScores = await findAll()
//     const highScoreIndex = allHighScores.findIndex(p => p.id == highScoreId)
//     if (highScoreIndex < 0) return

//     allHighScores.splice(highScoreIndex, 1)

//     saveAll(allHighScores)
// }

// async function find(highScoreId) {
//     const allHighScores = await findAll()

//     return allHighScores.find(p => p.id == highScoreId)
// }

// async function saveAll(scores) {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(dbPath, JSON.stringify(scores), (err, file) => {
//             if (err) return reject(err)

//             resolve()
//         })
//     })
// }

// module.exports = {
//     findAll,
//     find,
//     add,
//     del
// }

//********************** */

const fs = require('fs')
const highScoreModel = require('../models/highScore_model')

// const dbPath = `${__dirname}/../database.json`//do not need, because dont use file anymore


async function findAll() {
    return highScoreModel.find().populate('team')

}

async function add(highScore) {
    return highScoreModel.create(highScore)
}

async function del(id) {
    return highScoreModel.remove({ id }) // = id: highScoreId
}

async function find(id) {
    return highScoreModel.findOne({ id }).populate('team')
        //whenever mongoose finds an object in my friends list, go and fetch the details of my friends


}



module.exports = {
    findAll,
    find,
    add,
    del
}