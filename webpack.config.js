const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({mode}) => {
    return {
        mode,
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                { 
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.html$/,
                    use: ['html-loader']
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: './index.html'
            })
        ]
    }
}