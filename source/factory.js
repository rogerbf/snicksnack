const factory = (fns, configuration) => Object.assign(
  userConfiguration => factory(fns, userConfiguration),
  fns.reduce((state, f) => f(state), Object.assign({}, configuration))
)

module.exports = factory
