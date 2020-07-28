const path = require('path');
module.exports={
    // Tell webpack the root file our
    // Server appliction
    entry : './src/client/client.js',

    // Tell webpack where to put the output file

    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    // Tell webpack to run babel on every file its runs through

    module:{
        rules:[
            {
                test: /\.js?$/,
                loader : 'babel-loader',
                exclude: /node_module/,
                options: {
                    presets:[
                        'react',
                        'stage-0',
                        ['env', {targets:{browsers : ['last 2 versions']}}]
                    ]
                }
            }
        ]
    }

}