module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-unused-vars': 'off',
    'no-mixed-spaces-and-tabs': 0,
    'vue/multi-word-component-names': 0
  }
}
