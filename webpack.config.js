const path = require('path');

let BUILD_DIR = path.resolve(__dirname, 'public/js');
let APP_DIR = path.resolve(__dirname, 'public/js/src');

let config = {
    entry: APP_DIR + '/index.js',
    devtool : 'inline-sourcemap',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: APP_DIR,
                exclude: [/node_modules/],
                // loader: ['babel-loader?presets[]=es2015,presets[]=react,plugins[]=transform-object-rest-spread']
                loader: 'babel-loader',
                query:{
                    presets: ['es2017', 'react'],
                    plugins: ['transform-object-rest-spread', 'transform-decorators-legacy']
                }
            }
        ]
    }
};

module.exports = config;