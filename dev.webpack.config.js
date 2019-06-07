const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './src/chatix_widget_main.js',
	output: {
		filename: 'chatix_widget_bundle.js',
		path: path.resolve(__dirname, 'dist'),
        library: "ChatixCore",
        libraryTarget: 'var'
    },
	plugins: [
		new webpack.DefinePlugin({
			'process.env.API_URL': JSON.stringify('https://dev.chatix.io'),
			'process.env.API_PORT': JSON.stringify('5003'),
			'process.env.API_PATH': JSON.stringify('v1')
		})
	],
    devtool: 'inline-source-map',
    devServer: {
		contentBase: './dist',
        watchContentBase: true,
        open: true
    },
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
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader'
			}
		]
	}
};
