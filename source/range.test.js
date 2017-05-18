const range = require(`./range`)

describe(`range`, () => {
  it(`adds range method to state`, () => {
    const state = range({})
    expect(state).toHaveProperty(`range`)
    expect(typeof (state.range)).toEqual(`function`)
  })

  it(`returns an array with 0 items`, () => {
    const state = range({})
    expect(state.range()).toEqual([])
  })

  it(`returns a initialized array of specified range`, () => {
    const state = range({})
    expect(state.range(3)).toEqual([ undefined, undefined, undefined ])
  })
})
