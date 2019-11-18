module.exports = {
  plugins: ['jest'],
  extends: ['plugin:jest/recommended'],
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: 'detect'
    },
  },

};
