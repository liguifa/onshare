const path = require("path");

module.exports = {
	configureWebpack:{
		output:{
			path:path.resolve("./dist"),
			filename: '[name].min.js',
			chunkFilename: '[name].[chunkhash:5].min.js'
		}
	}
}