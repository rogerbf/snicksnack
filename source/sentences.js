module.exports = (
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
