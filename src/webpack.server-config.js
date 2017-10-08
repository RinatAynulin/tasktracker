const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV || 'development';

const URL = 'http://138.197.187.175/';

module.exports = {
    name: 'SSR',
    entry: {
        serverBundle: './server/index.js',
    },
    context: `${__dirname}/`,
    output: {
        path: `${__dirname}/static/server`,
        filename: NODE_ENV == 'development' ? '[name].js' : '[hash].js',
        publicPath: '/static/server/',
    },

    watch: NODE_ENV === 'development' ? true : false,
    externals: nodeExternals(),

    devtool: NODE_ENV === 'development' ? 'cheap-module-source-map' : false,

    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            include: [`${__dirname}/static_src`, `${__dirname}/server`],
            loader: 'babel-loader?presets[]=react&presets[]=es2015&presets[]=stage-0'
        },
        {
                test: /\.(css|scss)$/,
                loader: 'ignore-loader',
                include: [`${__dirname}/static_src`, `${__dirname}/server`]
            },
        ],
    },

    resolve: {
        modules: [
        `${__dirname}/static_src`, `${__dirname}/server`, 'node_modules'
        ],
        extensions: ['.js', '.jsx'],
    },

    // devtool: NODE_ENV === 'development' ? 'cheap-module-source-map' : false,

    plugins: [
    new webpack.DefinePlugin({
            SERVER: true,
            SERVER_URL: JSON.stringify(URL),
        }),
    new webpack.NoEmitOnErrorsPlugin(),
    ],
};
