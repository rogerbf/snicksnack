module.exports = (state, { range, random, wordList } = state) => Object.assign(
  {},
  state,
  { words: count => range(count).map(() => wordList[random() - 1]) }
)
