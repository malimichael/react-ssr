module.exports = {
  extends: ['airbnb'],
  parser: 'babel-eslint',
  parserOptions: {
    jsx: true,
  },
  plugins: ['flowtype'],
  env: { node: true, browser: true },
  rules: {
    'flowtype/generic-spacing': 'off',
    'import/order': ['error', { 'newlines-between': 'always-and-inside-groups' }],
    'import/default': 'off',
    'import/named': 'off',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-console': 'off',
    semi: 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: true },
    ],
    'react/prop-types': 'off',
  },
}