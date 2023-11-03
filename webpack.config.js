const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        popup: './src/index.tsx',
        contentScript: './src/contentScript.tsx'
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'public', to: '.' },
                { from: 'manifest.json', to: '.' }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
}
