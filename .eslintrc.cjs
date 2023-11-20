module.exports = {
  overrides: [
    {
      files: ['*.js'], // Adjust the file pattern based on your project structure
      rules: {
        // Treat warnings as non-fatal errors only in CI environment
        'no-warning-comments': process.env.CI ? 'error' : 'warn',
        // Add more rules as needed
      },
    },
  ],
};
