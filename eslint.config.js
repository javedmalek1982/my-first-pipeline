// Import the recommended ESLint rules
const js = require('@eslint/js');

// Export the configuration as an array of config objects
module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly'
      }
    },
    // Enforce modern variable declarations
    rules: {
      'no-var': 'error'
    }
  }
];
