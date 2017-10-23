const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ETP = require('extract-text-webpack-plugin');

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
	module: {
		loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
                options: {
                    presets: ['env', 'react', 'stage-0'],
                    plugins: [ 'transform-runtime' ]
                }
            },
            {
                test: /\.(css|scss|sass)$/,
                // loader: ETP.extract('style-loader', 'css-loader!sass-loader'),
                loader: ETP.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!postcss-loader!sass-loader'
                }),
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader',
                include: path.join(__dirname, 'src')
            }
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		inline: true,
		hot: true,
		historyApiFallback: true,
	},
	resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],

		alias: {
			'styles': path.resolve(__dirname, 'src/stylesheets'),
			'images': path.resolve(__dirname, 'src/assets')
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
			inject: 'body',
			excludeChunks: ['about'],
			filename: 'index.html'
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
			inject: 'body',
			excludeChunks: ['home'],
			filename: 'about.html'
		}),
		new webpack.HotModuleReplacementPlugin(),

		new webpack.optimize.CommonsChunkPlugin({
			name: 'common'
		}),

		// new ETP('styles.css'),
		new ETP({
			filename: '[name].styles.css',
			allChunks: true
		}),
    ]
};
