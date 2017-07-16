var webpack = require("webpack");

module.exports = {
  output: {
      filename: 'index.js'
  },
  resolve: {
    extensions: [".js", ".jsx", ".es6"]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  watch: true,
  devtool: "#inline-source-map",
  module: {
    rules: [{
      test: /(\.jsx?$|\.es6?$)/,
      loader: 'babel-loader',
      query:
      {
          presets:['es2015', 'react']
      },
      exclude: /node_modules/
    }]
  },
  plugins: []
}
