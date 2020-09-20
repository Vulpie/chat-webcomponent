const path = require('path')
const config = require('./webpack.config')
const merge = require('webpack-merge')

module.exports = merge(config, {
	mode: 'production',
	devtool: 'none',
	output: {
		filename: '[name].[contentHash].bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
})
