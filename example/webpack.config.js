var webpack = require("webpack");

module.exports = {
  entry: __dirname + '/app.jsx',
  output: {
      path: __dirname,
      filename: 'index.js'
  },
  resolve: {
    extensions: ['', ".js", ".jsx", ".es6"]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  watch: true,
  devtool: "#inline-source-map",
  module: {
    loaders: [{
      test: /(\.jsx?$|\.es6?$)/,
      loader: 'babel',
      query:
      {
          presets:['es2015', 'react'],
          plugins: [["transform-es2015-classes", { "loose": true }]]
      },
      exclude: /node_modules/
    }]
  },
  plugins: []
}
