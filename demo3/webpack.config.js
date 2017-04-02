let HtmlWebpackPlugin = require('html-webpack-plugin')
let path = require('path')
let config = {
    entry:{
        index:'./src/index.js'
    },
    output:{
        path:path.resolve('./dist'),
        filename:'[name].js',
        chunkFilename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:/(node_modules|bower_components)/,
                use:[
                    {
                        loader:'babel-loader',
                        query:{
                            presets:['es2015'],
                            cacheDirectory:true,
                            plugins:['transform-runtime']
                        }
                    }
                ]
            }
        ]

    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html')
        })
    ],
    devServer:{
        port:8080,
        contentBase:path.resolve('./dist')
    }
}
module.exports = config;
