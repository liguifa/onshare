const config = require("../config/config");

module.exports = (app) => {
	for (let key in config.routes) {
		app.all(config.routes[key].url, (request, response) => {
			try {
				response.socket = app.socket.client;
				var controller = new (require(`../controller/${config.routes[key].controller}.js`))(request, response);
				controller[config.routes[key].action](request.data);
			} catch (e) {
				console.log(e);
				throw e;
			}
		});
	}
	app.all(/.*/, (request, response) => {
		response.statusCode = 404;
		throw new Error("Not found");
	});
}