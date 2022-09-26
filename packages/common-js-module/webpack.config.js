const path = require('path');

module.exports = {
  entry: './src/index.cjs',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
