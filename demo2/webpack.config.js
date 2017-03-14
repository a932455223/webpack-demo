let htmlPlugin = require('html-webpack-plugin');
let path = require('path');

let config = {
	entry:{
		app:__dirname+'/src/js/index.jsx'
	},
	output:{
		path:__dirname + '/dist',
		filename:'js/[name].js'
	},
	resolve:{
		modules: ['node_modules']
	},
	module:{
		rules:[
			{
				test: /\.jsx?$/, //用babel编译jsx和es6
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
      		presets: ["es2015", "react", "stage-0"],
      		plugins: ["lodash", "transform-runtime", "transform-decorators-legacy", "add-module-exports", ["import", [{ "libraryName": "antd", "style": true }]]]
    		}
			},{
        test: /\.css?$/,
        loaders : [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less?$/,
        loaders : [
          'style-loader',
          'css-loader',
          'less-loader'
        ],
        include: __dirname
      },
      { test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url',
        query: {limit: 10240}
      }
		]
	},
	plugins:[
		new htmlPlugin({
			template:__dirname + '/src/index.html',
			filename:'index.html'
		})
	],
	devServer:{
		contentBase:__dirname + '/dist',
		inline:true
	}
};

module.exports = config;