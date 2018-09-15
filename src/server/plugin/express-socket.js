const socket = require("socket.io");
const config = require("../config/config");
const http = require("http");

module.exports = (app) => {
	let server = http.createServer()
	let io = socket();
	let rooms = [];
	io.on('connection', client => {
		client.on("join", name => {
			client.join(name);
			if(!rooms[name]){
				rooms[name] = [];
			}
			rooms[name].push(client);
		});
	});
	io.listen(server);
	global.socket = {
		push(room, event, data){
			if(rooms[room]){
				rooms[room].forEach(client => {
					console.log("------------------------------------------")
					console.log("=-=-=-=-=-=-=-=-=-=-=-=--====--")
					client.emit(event, data);
				});
			}
		},
		on(room, event, func){
			if(rooms[room]){
				rooms[room].forEach(client => {
					client.on(event, func);
				});
			}
		}
	}
	server.listen(config.socket.port);
}