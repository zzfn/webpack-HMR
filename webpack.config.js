const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    target: 'web',
    mode: "development",
    entry:'./index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
        })
    ],
    devtool: 'source-map',
    devServer: {
        hotOnly: true
    }
}