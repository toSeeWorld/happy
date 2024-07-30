
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
/** @type
 * {import('webpack').Configuration
 */
const config = {
    entry: './src/index.ts',
    mode: 'development',
    output: {

        path: __dirname + '/dist',

        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript',
                            '@babel/preset-react'
                        ],
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ],
    },
    plugins: [ new CleanWebpackPlugin()],
    resolve: {
        extensions: ['.tsx', '.jsx', '.ts', '.js']
    }
}
module.exports = config