let htmlPlugin = require('html-webpack-plugin');

let config = {
	entry:{
		app:__dirname+'/app/js/main.js'
	},
	output:{
		path:__dirname + '/dist',
		filename:'js/[name].js'
	},
	module:{
		rules:[
			{
				test: /\.js$/, //用babel编译jsx和es6
        exclude: /node_modules/,
        loader: 'babel-loader',
        options:{
        	cacheDirectory: true,
          presets: ['es2015', 'react'],
          plugins: [
              ["transform-object-rest-spread"],
              ["transform-runtime"]
          ]
        }
			}
		]
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