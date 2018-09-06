module.exports = (app) => {
	return (request, response, next) => {
        for (let i in config.anonymous) {
            if (config.anonymous[i].test(request.url)) {
                next();
                return;
            }
        }
        let cookieString = request.headers["cookie"];
        let isLogin = true;
        if (!cookieString || cookieString === "") {
            response.statusCode = 401;
            throw new Error("Unauthorized");
        } else {
            var key = "auth";
            cookieString = cookieString.replace(/\s/g, "");
            var cooikes = cookieString.split(";");
            var cookie = cooikes.find((cookie) => {
                var cookieKeyValue = cookie.split("=");
                return cookieKeyValue[0] === key
            });
            if (cookie) {
                let auth = cookie.split("=")[1];
                try {
                    let username = $.string.decrypt(auth);
                    new userService().getUserByUsername(username).then((result) => {
                        if (result && result.length >= 1) {
                            next();
                        } else {
                            response.statusCode = 401;
                            throw new Error("Unauthorized");
                        }
                    });
                } catch (err) {
                    console.log(err);
                    response.statusCode = 401;
                    throw new Error("Unauthorized");
                }
            } else {
                response.statusCode = 401;
                throw new Error("Unauthorized");
            }
        }
        next();
	}
}