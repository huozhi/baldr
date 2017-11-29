const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const joinPath = path.join.bind(null, __dirname)
const isProduction = process.env.NODE_ENV === 'production'
const publicPath = require('../package.json').name

module.exports = {
  entry: {
    app: [joinPath('app.js')],
  },
  output: {
    publicPath: isProduction ? `/${publicPath}` : '/',
    path: joinPath('dist'),
    filename: isProduction ? 'app.[hash].js' : 'app.js',
  },
  devtool: !isProduction && 'cheap-eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /examples\/.*\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:4]',
          'postcss-loader'
        ],
      },
      {
        test: /src\/.*\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ],
      },
      {
        test: /\.svg$/,
        use: ['babel-loader?presets[]=es2015,presets[]=react', 'svg-react-loader'],
      }
    ],
  },
  plugins: ([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('postcss-import')({addDependencyTo: webpack}),
          require('postcss-nested'),
          require('autoprefixer'),
        ],
      }
    }),
  ]).concat(isProduction ? [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {warnings: false},
      output: {comments: false},
    }),
    new HtmlWebpackPlugin({
      template: joinPath('index.html'),
      minify: false,
    }),
  ] : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]),
  devServer: {
    publicPath: '/',
    contentBase: joinPath('.'),
    port: 3000,
    hot: true,
    inline: true,
    historyApiFallback: true,
    stats: {
      colors: true,
      chunks: false,
      chunkModules: false,
    },
  },
}
