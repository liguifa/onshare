const $ = require("../common/common");
const fs = require("fs");
const streamLength = require("stream-length");
const session = require('express-session');
const config = require("../config/config");

module.exports = class controller {
    constructor(request, response) {
        this.request = request;
        this.response = response;
    }

    json(data) {
        this.response.setHeader("Access-Control-Allow-Origin",config.cors);
        this.response.setHeader("Access-Control-Allow-Credentials", "true");
        this.response.send(JSON.stringify(data));
        this.response.end();
    }

    buffer(buffer) {
        this.response.write(buffer);
        this.response.end();
    }

    view(filename) {
        fs.readFile(filename, { encoding: "utf8" }, (err, data) => {
            this.response.set("Content-Type", "text/html");
            this.response.send(data);
            this.response.end();
        });
    }

    content(context) {
        this.response.set("Content-Type", "text/plain");
        this.response.send(context);
        this.response.end();
    }

    stream(stream, contentType, filename) {
        contentType = contentType || "application/octet-stream";
        streamLength(stream).then(size => {
            this.response.set("Content-Type", contentType);
            this.response.set("Content-Length", size);
            this.response.set("Accept-Ranges", "bytes");
            this.response.set("Content-Range", `byte 0-${size}/${size}`);
            this.response.set("Content-disposition",`attachment;filename=${encodeURIComponent(filename)}`);
            stream.on("data", data => {
                this.response.write(data);
            });
            stream.on("end", () => {
                this.response.end();
            });
        });
    }
}