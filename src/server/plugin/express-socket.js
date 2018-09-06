const socket = require("socket.io");
const config = require("../config/config");
const http = require("http");

module.exports = (app) => {
	let server = http.createServer()
	app.socket = socket();
	app.socket.on('connection', client => {
		request.socket = client;
	});
	server.listen(config.socket.port);
}