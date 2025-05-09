const unusedImports = require('eslint-plugin-unused-imports');

module.exports = [
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'no-unused-vars': 'off',
      'unused-imports/no-unused-vars': 'error', 
    },
  },
];