const sentences = require(`./sentences`)

describe(`sentences`, () => {
  it(`adds a sentences method to the state`, () => {
    const state = sentences({ sentenceLength: {} })
    expect(state).toHaveProperty(`sentences`)
    expect(typeof (state.sentences)).toEqual(`function`)
  })

  it(`returns an array of sentences`, () => {
    const range = jest.fn(() => [ undefined ])
    const words = jest.fn(() => [ `a` ])
    const sentenceLength = { min: 1, max: 3 }

    const state = sentences({ range, words, sentenceLength })
    state.sentences(1)

    expect(range).toHaveBeenCalledWith(1)
  })
})
