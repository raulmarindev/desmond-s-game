const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './src/main.ts'
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
              test: [/\.vert$/, /\.frag$/],
              use: "raw-loader"
            },
            {
              test: /\.(gif|png|jpe?g|svg|xml)$/i,
              use: "file-loader"
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new CleanWebpackPlugin({
            root: path.resolve(__dirname, "../")
          }),
          new HtmlWebpackPlugin({
            template: "./public/index.html"
          }),
          new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'public/assets', '**', '*'),
                to: path.resolve(__dirname, 'dist')
            }
        ]),
          new webpack.DefinePlugin({
            'typeof CANVAS_RENDERER': JSON.stringify(true),
            'typeof WEBGL_RENDERER': JSON.stringify(true)
        }),
    ]
};