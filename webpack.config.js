
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const components = require('./component.json')
const TerserPlugin = require('terser-webpack-plugin');
/** @type
 * {import('webpack').Configuration
 */
const config = {
    entry: './src/index.ts',
    mode: 'production',
    output: {

        path: __dirname + '/dist',
        library: {
            name:'happyUi',
            type: "umd",
        },
        filename: '[name].bundle.js'
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
    plugins: [new CleanWebpackPlugin()],
    resolve: {
        extensions: ['.tsx', '.jsx', '.ts', '.js']
    },
    optimization:{
        minimize:true,
        minimizer:[
            new TerserPlugin({  extractComments: false})
        ]
    },
    externals:{
        react:'React',
        'react-dom':'ReactDOM'
    }
}
module.exports = config