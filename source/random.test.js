const random = require(`./random`)

describe(`random factory`, () => {
  it(`constructs the expected state`, () => {
    const distribution = `zipf`

    const result = random({}, { distribution })
    expect(result).toHaveProperty(`random`)
  })
})
