const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		main: './index.js'
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.less$/,
			   loader: 'less-loader', 
			},
		]
	}
}