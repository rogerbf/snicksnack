const random = require(`./random`)

describe(`random factory`, () => {
  it(`constructs the expected state`, () => {
    const zipf = jest.fn()
    const probjs = { zipf }
    const distribution = `zipf`
    const wordList = [ `a`, `b` ]

    const result = random({}, { probjs, distribution, wordList })

    expect(zipf).toHaveBeenCalledWith(1, 2)
    expect(result).toHaveProperty(`random`)
  })
})
