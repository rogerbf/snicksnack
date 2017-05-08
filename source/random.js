module.exports = (state, { probjs, distribution, wordList } = state) => Object.assign(
  {},
  state,
  { random: probjs[distribution](1, wordList.length) }
)
