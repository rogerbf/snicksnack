const factory = require(`./factory`)
const random = require(`./random`)
const range = require(`./range`)
const words = require(`./words`)
const sentences = require(`./sentences`)
const api = require(`./api`)
const wordLists = require(`kelly-lists`)

const defaults = {
  sentenceLength: {
    min: 7,
    max: 26
  },
  language: `swedish`
}

module.exports = Object.assign(
  factory(
    [
      state => ({ ...state, wordList: wordLists[state.language] }),
      random,
      range,
      words,
      sentences,
      api
    ],
    defaults
  ),
  {
    defaults
  }
)
