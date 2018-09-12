const fs = require("fs");

module.exports = (app) => {
    app.use((err, request, response, next) => {
        response.set("Content-Type", "text/html");
        response.statusCode = response.statusCode !== 401 && response.statusCode !== 404 ? 500 : response.statusCode;
        var errorPagePath = `${__dirname}/../view/error/${response.statusCode}.html`;
        fs.readFile(errorPagePath, { encoding: "utf8" }, (err, data) => {
            logger.err(err);
            response.send(data);
            response.end();
        })
        next();
    });
}