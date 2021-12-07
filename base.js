module.exports = {
  extends: [
    'airbnb/base',
    'plugin:wyze-update/recommended',
    'wyze-update/rules/best-practices',
    'wyze-update/rules/es6',
    'wyze-update/rules/import',
    'wyze-update/rules/legacy',
    'wyze-update/rules/style',
  ],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: [
    'eslint-comments',
    'import',
    'wyze-update',
  ],
}
