module.exports = class HighScore {
    constructor(id, name, age, score) {
        this.id = id
        this.name = name
        this.age = age || 0
        this.score = score || 0
    }

    static create(scores) {
        return new HighScore(highScore.id, highScore.name, highScore.age, highScore.score);
    }
}