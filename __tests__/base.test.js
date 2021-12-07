import base from '../base'

describe('base config', () => {
  it('extends files', () => {
    const expected = [
      'airbnb/base',
      'plugin:wyze-update/recommended',
      'wyze-update/rules/best-practices',
      'wyze-update/rules/es6',
      'wyze-update/rules/import',
      'wyze-update/rules/legacy',
      'wyze-update/rules/style',
    ]

    expect(base.extends).toEqual(expected)
  })

  it('specifies plugins', () => {
    const expected = [
      'eslint-comments',
      'import',
      'wyze-update',
    ]

    expect(base.plugins).toEqual(expected)
  })

  it('sets parserOptions correcty', () => {
    const expected = {
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
      },
      ecmaVersion: 2017,
      sourceType: 'module',
    }

    expect(base.parserOptions).toEqual(expected)
  })
})
