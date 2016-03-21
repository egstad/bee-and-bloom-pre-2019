var res = {
    root: __dirname
};



var mod = {
    loaders: [
        {
            test: /js_src\/.*\.js$/,
            exclude: /node_modules|js_libs/,
            loaders: ["babel-loader"]
        },

        {
            test: /(hobo|hobo.build)\.js$/,
            loader: "expose?hobo"
        }
    ]
};



var app = {
    resolve: res,


    entry: {
        app: "./js_src/app.js"
    },


    output: {
        path: "./web_template/js/",
        filename: "app.js"
    },


    module: mod
};



var sqs = {
    resolve: res,


    entry: {
        app: "./js_src/app-sqs.js"
    },


    output: {
        path: "./sqs_template/scripts/",
        filename: "app.js"
    },


    module: mod
};



module.exports = [
    app,
    sqs
];
