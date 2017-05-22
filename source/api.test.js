const api = require(`./api`)

describe(`api`, () => {
  it(`picks words and sentences properties from object`, () => {
    const state = {
      random: {},
      words: {},
      sentences: {}
    }

    expect(api(state)).toEqual({ words: {}, sentences: {} })
  })
})
