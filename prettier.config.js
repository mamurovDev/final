module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 80,
  overrides: [
    {
      files: ['**/*.scss'],
      options: {
        parser: 'scss',
      },
    },
  ],
  // Add more options as needed
}
