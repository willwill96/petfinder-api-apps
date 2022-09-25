const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: './src/index.ts',
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    module: {
        rules: [{
            test: /\.ts?$/,
            use: 'ts-loader',
        }]
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts']
    },
};