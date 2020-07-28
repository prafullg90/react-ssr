const path = require('path');
module.exports={
    // Inform web pack buiding bundle 
    // For node js rather than browser
    target : 'node',

    // Tell webpack the root file our
    // Server appliction
    entry : './src/index.js',

    // Tell webpack where to put the output file

    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
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