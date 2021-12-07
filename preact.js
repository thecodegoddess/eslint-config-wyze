module.exports = {
  extends: [
    'wyze-update',
    'wyze-update/rules/preact',
  ],
  settings: {
    react: {
      createClass: 'h',
      pragma: 'preact',
      version: '6.0',
    },
  },
}
