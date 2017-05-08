module.exports = state => Object.assign(
  {},
  state,
  { range: (count = 0) => Array(count).fill(undefined) }
)
