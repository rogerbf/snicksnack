const probjs = require(`prob.js`)

module.exports = state => Object.assign(
  {},
  state,
  { random: collection => probjs.zipf(1, collection.length)() }
)
