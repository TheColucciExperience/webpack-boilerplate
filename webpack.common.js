
// Getting all necessary loaders and plugins

const path = require( 'path' ),
  CleanWebpackPlugin = require( 'clean-webpack-plugin' ),
  HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
  entry: {
    app: './src/main.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [ 'html-loader' ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin( ['./dist/'] ),
    new HtmlWebpackPlugin( {
      title: 'Plugin Output',
      template: 'src/index.html',
      inject: false
    } )
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve( __dirname, 'dist' )
  }
}
