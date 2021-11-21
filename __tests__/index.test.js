import main from '../'

describe('main config', () => {
  it('extends files', () => {
    const expected = [
      'airbnb',
      'wyze-update/base',
      'wyze-update/rules/react',
      'wyze-update/rules/react-a11y',
    ]

    expect(main.extends).toEqual(expected)
  })
})
