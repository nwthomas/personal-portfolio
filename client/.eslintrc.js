module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  extends: [
    `react-app`,
    'airbnb',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['import', 'react', 'jsx-a11y'],
  rules: {
    'valid-jsdoc': 2,
    'react/jsx-uses-react': 1,
    'react/jsx-no-undef': 2,
    'react/jsx-wrap-multilines': 2,
    'react/no-string-refs': 0
  }
};
