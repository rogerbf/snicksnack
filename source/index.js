const factory = require(`./factory`)
const random = require(`./random`)
const range = require(`./range`)
const words = require(`./words`)
const sentences = require(`./sentences`)
const api = require(`./api`)

const defaults = {
  sentenceLength: {
    min: 7,
    max: 26
  },
  wordList: require(`./common-words`),
  probjs: require(`prob.js`),
  distribution: `zipf`
}

module.exports = Object.assign(
  factory([ random, range, words, sentences, api ], defaults),
  { defaults }
)
