module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  env: {
    es6: true,
    node: true,
    jest: true
  },
  globals: {
    expect: true,
    sinon: true
  },
  plugins: ['prettier', 'jest'],
  extends: [
    'eslint:recommended',
    'eslint-config-prettier'
  ],
  rules: {
    'prettier/prettier': 'warn',
    'no-console': 'off'
  }
}
