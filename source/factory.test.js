const factory = require(`./factory`)

describe(`factory`, () => {
  it(`is a function`, () => {
    expect(typeof (factory)).toEqual(`function`)
  })

  it(`composes factories`, () => {
    const configuration = { flag: `a` }
    const fn = jest.fn()

    const app = factory([ fn ], configuration)

    expect(typeof (app)).toEqual(`function`)
    expect(fn).toHaveBeenCalledWith(configuration)

    const customConfiguration = { flag: `b` }
    const customApp = app(customConfiguration)

    expect(typeof (customApp)).toEqual(`function`)
    expect(fn).toHaveBeenCalledWith(customConfiguration)
  })
})
