const socket = require("socket.io");
const config = require("../config/config");
const http = require("http");

module.exports = (app) => {
	let server = http.createServer()
	app.socket = socket();
	app.socket.on('connection', client => {
		app.socket.client = client;
	});
	app.socket.listen(server);
	server.listen(config.socket.port);
}