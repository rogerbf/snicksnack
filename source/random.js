module.exports = (state, { probjs, distribution, wordList } = state) => Object.assign(
  {},
  state,
  { random: collection => probjs[distribution](1, collection.length)() }
)
