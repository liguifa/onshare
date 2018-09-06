const config = require("../config/config");
const common = require("../common/common");

module.exports = (app) => {
	return (request, response, next) => {
		if(request.session){
			next();
		}
		config.sessionId = config.sessionId || "session_id"
		let sessionId = request.cookies[config.sessionId] || common.guid.new();
		if(app.store && app.store[sessionId]){
			request.sessions = app.store[sessionId];
		} else {
			if(!app.store){
				app.store = {};
			}
			if(!app.store[sessionId]){
				app.store[sessionId] = {};
			}
			request.sessions = {};
		}
		response.sessions = new Proxy({},{
			get(target, key){
				return request.sessions[sessionId][key];
			},
			set(target, key, value){
				request.sessions[key] = value;
				if(!response.cookies[config.sessionId]){
					response.cookies[config.sessionId] = sessionId;
				}
				app.store[sessionId][key] = value;
				return true;
			}
		});

		next();
	}
}
