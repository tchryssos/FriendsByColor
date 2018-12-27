const path = require('path')
const autoprefixer = require('autoprefixer')

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: [
		'./app.js',
	],
	output: {
		path: path.join(__dirname, 'www'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	stats: {
		errorDetails: true,
		reasons: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/react',
								'@babel/preset-env',
							],
						},
					},
				],
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader?limit=8192',
			},
			{
				test: /(\.scss|\.css)$/,
				use: [{
					loader: 'style-loader',
				}, {
					loader: 'css-loader',
				}, {
					loader: 'postcss-loader',
					options: {
						plugins: [autoprefixer],
					},
				}, {
					loader: 'sass-loader',
				}],
			},
		],
	},
	resolve: {
		modules: [
			path.join(__dirname, 'node_modules'),
		],
		alias: {
			components: path.join(__dirname, 'src/components'),
			logic: path.join(__dirname, 'src/logic'),
			pages: path.join(__dirname, 'src/pages'),
			constants: path.join(__dirname, 'src/constants'),
		},
	},
}
