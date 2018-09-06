const formidable = require("formidable");
const config = require("../config/config");

module.exports = (app) => {
	app.get(/.*/, (request, response, next) => {
		request.data = request.query;
		next();
	});

	app.post(/.*/, (request, response, next) => {
		if (/text\/plain/.test(request.headers["content-type"])) {
			var data = "";
			request.on("readable", function () {
				request.setEncoding("utf8");
				var temp = request.read();
				if (temp && temp !== null) {
					data += temp;
				}
			});
			request.on("end", () => {
				data = JSON.parse(data);
				request.data = data;
				next();
			});
		} else {
			next();
		}
	});

	app.post(/.*/, (request, response, next) => {
		if (!/text\/plain/.test(request.headers["content-type"])) {
			var form = new formidable.IncomingForm();
			form.uploadDir = config.uploadDir;
			form.keepExtensions = true;
			form.parse(request, (err, fields, files) => {
				request.data = fields;
				request.files = files;
				next();
			});
		} else {
			next();
		}
	});
}