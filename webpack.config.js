const path = require( "path" )
const HtmlWebpackPlugin = require('html-webpack-plugin')
const es3ifyPlugin = require('es3ify-webpack-plugin')
const ie8 = require( "./webpack-ie8-plugin/index" )

module.exports = {
    mode: "development" ,
    entry: "./src/index.js" ,
    devtool: "source-map" ,
    output: {
        path: path.resolve( __dirname , "dist" ) ,
        filename: "bundle.js" ,
    } ,
    devServer: {
        contentBase: path.join(__dirname, 'dist') ,
        compress: true ,
        port: 9000 ,
        host: '0.0.0.0' ,
    } ,
    module: {
        rules: [
            {
                test: /\.js$/ ,
                exclude: /node_modules/ ,
                use: {
                    loader: 'babel-loader' ,
                    options: {
                        presets: [
                            [ '@babel/preset-env' , { loose: true , } ]
                        ] ,
                        plugins: [
                            [ '@babel/plugin-proposal-class-properties' , { loose: true } ] ,
                            [ "@babel/plugin-transform-classes", { loose: true } ] ,
                        ]
                    }
                }
            }
        ] ,
    } ,
    plugins: [ 
        new ie8() ,
        new es3ifyPlugin() ,
        new HtmlWebpackPlugin( { template: './public/index.html' } ) ,
    ]
}