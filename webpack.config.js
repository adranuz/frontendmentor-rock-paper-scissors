const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  output: {filename: 'app.bundle.js'},
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/, //todos los archivos js seran leidos por el babel-loader
        exclude: /(node_modules|bower_components)/, //exepto estas carpetas
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] //add interpreters
          }
        }
      },
      {
        test: /\.css$/, //archivos que usan el loader
        use: ["style-loader", "css-loader"] //loaders que se usa, importante este orden
      },
    ]
  },
}