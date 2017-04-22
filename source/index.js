const words = require(`./common-words`)
const pickOne = require(`prob.js`).zipf(1, words.length)

module.exports = count => Array(count).fill(``).map(() => words[pickOne()])
