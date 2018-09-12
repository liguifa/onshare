const log4js = require("log4js");
const config = require("../config/config");

module.exports = (app) => {
	log4js.configure(config.log4js);
	let log = log4js.getLogger('cheese');
	console.info = console.log;
	global.logger = {};
	for(let name in log){
		global.logger[name] = function(){
			log[name].apply(log,arguments);
			console[name].apply(console,arguments);
		}
	}
}