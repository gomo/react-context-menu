var webpack = require("webpack");

module.exports = {
  output: {
      filename: 'index.js',
      libraryTarget: 'umd'
  },
  resolve: {
    extensions: [".js", ".jsx", ".es6"]
  },
  externals: [
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    },
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'prop-types': {
        root: 'PropTypes',
        commonjs2: 'prop-types',
        commonjs: 'prop-types',
        amd: 'prop-types'
      }
    },
    {
      'classnames': {
        root: 'classNames',
        commonjs2: 'classnames',
        commonjs: 'classnames',
        amd: 'classnames'
      }
    }
  ],
  watch: true,
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
