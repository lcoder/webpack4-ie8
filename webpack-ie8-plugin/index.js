const { ConcatSource } = require("webpack-sources")
const pluginName = 'IE6FixObjectDefineProperty'
const path = require( "path" )
let codeText
require( 'fs' ).readFile( path.resolve( __dirname , "./template.js" ) , { encoding: 'utf8' } , ( err , code ) => {
	if ( err ) throw err ;
	codeText = code
} )
class IE6FixObjectDefineProperty {
	apply( compiler ) {
		compiler.hooks.compilation.tap( pluginName , compilation => {
			compilation.hooks.optimizeChunkAssets.tap( pluginName , chunks => {
				for (const chunk of chunks) {
					for (const file of chunk.files) {
						compilation.assets[file] = new ConcatSource(
							codeText ,
							"\n" ,
							compilation.assets[ file ]
						)
					}
				}
			} )
		} )
	}
}

module.exports = IE6FixObjectDefineProperty