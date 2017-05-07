const probjs = require(`prob.js`)

const factory = (fns, configuration) => Object.assign(
  userConfiguration => factory(fns, userConfiguration),
  fns.reduce((state, f) => f(state), Object.assign({}, configuration))
)

const defaults = {
  sentenceLength: {
    min: 7,
    max: 26
  },
  wordList: require(`./common-words`),
  distribution: `zipf`
}

const random = state => Object.assign(
  {},
  state,
  { random: probjs[state.distribution](1, state.wordList.length) }
)

const range = state => Object.assign(
  {},
  state,
  { range: (count = 0) => Array(count).fill(undefined) }
)

const words = (state, { range, random, wordList } = state) => Object.assign(
  {},
  state,
  { words: count => range(count).map(() => wordList[random()]) }
)

const sentences = (
  state,
  { range, words, sentenceLength: { min, max } } = state
) => Object.assign(
  {},
  state,
  {
    sentences: count => (
      range(count)
      .map(() =>
        words(Math.ceil(min - 1 + Math.random() * (max - (min - 1))))
        .join(` `)
        .concat(`.`)
        .replace(/^./, first => first.toUpperCase())
      )
    )
  }
)

const snicksnack = ({ words, sentences }) => ({ words, sentences })

module.exports = Object.assign(
  factory([ random, range, words, sentences, snicksnack ], defaults),
  { defaults }
)
