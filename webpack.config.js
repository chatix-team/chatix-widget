const webpack = require('webpack');
const path = require('path');

var os = require('os');

module.exports = {
	entry: './src/chatix_widget_main.js',
	output: {
		filename: 'chatix_widget_main.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.API_URL': JSON.stringify('http://app1.chatix.io:5003/v1')
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'stage-0'],
					}
				}
			}
		]
	}
};
