const commonWords = require(`./common-words`)
const zipf = require(`prob.js`).zipf(1, commonWords.length)

const defaultConfig = {
  sentenceLength: {
    min: 7,
    max: 26
  }
}

const words = (count) =>
  Array(count).fill(``).map(() => commonWords[zipf()])

const sentences = ({ sentenceLength: { min, max } }, count) =>
  Array(count)
  .fill(``)
  .map(() =>
    words(Math.ceil(min - 1 + Math.random() * (max - (min - 1))))
    .join(` `)
    .concat(`.`)
    .replace(/^./, first => first.toUpperCase())
  )

module.exports = Object.assign(
  words,
  { sentences: sentences.bind(null, defaultConfig) }
)
