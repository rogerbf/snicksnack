const words = require(`./words`)

describe(`words`, () => {
  it(`adds a words method to the state`, () => {
    const state = words({})
    expect(state).toHaveProperty(`words`)
    expect(typeof (state.words)).toEqual(`function`)
  })

  it(`returns a word from a wordlist`, () => {
    const wordList = [ `a` ]
    const random = jest.fn(() => 1)

    const initialState = { wordList, random }
    const state = words(initialState)

    const actual = state.words(1)
    const expected = [ `a` ]

    expect(actual).toEqual(expected)
  })
})
