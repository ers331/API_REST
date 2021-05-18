module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {

    'no-console': 'off',
    'class-methods-use-this': 'off',
    'import/first': 'off',
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-dupe-class-members': 'off',

  },
};
