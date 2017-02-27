let htmlPlugin = require('html-webpack-plugin');

let config = {
	entry:{
		app:__dirname+'/app/js/main.js'
	},
	output:{
		path:__dirname + '/dist',
		filename:'js/[name].js'
	},
	plugins:[
		new htmlPlugin({
			template:__dirname + '/app/index.html',
			filename:'index.html'
		})
	],
	devServer:{
		contentBase:__dirname + '/dist',
		inline:true
	}
};

module.exports = config;