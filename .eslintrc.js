module.exports = {
  plugins: ['react'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
  ],
  rules: {
    'prettier/prettier': 'warn',
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
};
