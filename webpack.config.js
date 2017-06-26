const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const cwd = process.cwd();

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.[chunkhash].js',
		path: path.resolve(cwd, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
            {
				test: /\.html$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'html-loader',
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: {
						loader: 'css-loader'
					}
				})
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/i,
				use: {
					loader: 'file-loader'
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('bundle.[chunkhash].css'),
		new HTMLWebpackPlugin({
			template: path.resolve(cwd, 'public/index.template.html')
		})
	],
	devServer: {
		contentBase: path.resolve(cwd, 'public'),
		historyApiFallback: true
	}
};
