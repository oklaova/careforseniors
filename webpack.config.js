module.exports = {
    entry: __dirname + '/src/',
    output:{
        path: __dirname + '/public/js',
        filename: 'bundle.js',
        publicPath: '/assets/js/',
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: ['node_modules'],
                query:{
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}
