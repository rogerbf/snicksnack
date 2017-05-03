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
  wordList: require(`./common-words`)
}

const zipf = state => Object.assign(
  state,
  { zipf: probjs.zipf(1, state.wordList.length) }
)

const range = state => Object.assign(
  state,
  { range: (count = 0) => Array(count).fill(undefined) }
)

const words = state => {
  const { range, zipf, wordList } = state
  return Object.assign(
    state,
    { words: count => range(count).map(() => wordList[zipf()]) }
  )
}

const sentences = state => {
  const { range, words, sentenceLength: { min, max } } = state
  return Object.assign(
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
}

const snicksnack = ({ words, sentences }) => ({
  words: count => words(count),
  sentences: count => sentences(count)
})

module.exports = Object.assign(
  factory([ zipf, range, words, sentences, snicksnack ], defaults),
  { defaults }
)
