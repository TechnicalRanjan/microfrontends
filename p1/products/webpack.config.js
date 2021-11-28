const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFedrationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports ={
    mode : 'development',
    devServer :{
        port : 8081,
    },
    plugins: [
        new ModuleFedrationPlugin({
          name: 'products',
          filename: 'remoteEntry.js',
          exposes: {
            './ProductsIndex': './src/bootstrap',
          },
          shared : ['faker']
        }),
        new HtmlWebPackPlugin({
          template: './public/index.html',
        }),
      ],
};