module.exports = {
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'development',
  devtool: 'eval-source-map',
};
