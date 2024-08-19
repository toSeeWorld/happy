
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const components = require('./component.json')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
/** @type
 * {import('webpack').Configuration
 */
const config = {
    entry: './src/index.ts',
    mode: 'development',
    devServer: {
        static: './dist',
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
    plugins: [new HtmlWebpackPlugin()],
    resolve: {
        extensions: ['.tsx', '.jsx', '.ts', '.js']
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({ extractComments: false })
        ]
    },
    externals: {
        // react: 'React',
        // 'react-dom': 'ReactDOM'
    }
}
module.exports = config