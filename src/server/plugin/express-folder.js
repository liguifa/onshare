const config = require("../config/config");
const fs = require("fs");

module.exports = (app) => {
	config.folders.forEach(folder => {
		if(!fs.existsSync(folder)){
			fs.mkdirSync(folder);
		}
	});
}