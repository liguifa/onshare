module.exports = (app) => {
	return (request, response, next) => {
		request.cookies = {};
		var cookieString = request.headers["cookie"];
		if (cookieString !== undefined) {
			cookieString = cookieString.replace(/\s/g, "");
			var cooikes = cookieString.split(";");
			var cookie = cooikes.forEach((cookie) => {
				var cookieKeyValue = cookie.split("=");
				request.cookies[cookieKeyValue[0]] = cookieKeyValue[1];
			});
		}

		response.cookies = new Proxy({},{
			get(taget, key){
				return request.cookies[key];
			},

			set(target, key, value){
				let isExpire = typeof value.isExpirex ? true : false;
				let cookieValue = typeof value == "string" ? value : value.value;
				request.cookies[key] = value;
				response.setHeader("Set-Cookie", `${key}=${cookieValue};path=/${isExpire ? "" : (";expires=" + new Date("2229/1/1 1:1:1").toGMTString())};HttpOnly`);
				return true;
			}
		});
		next();
	}
}