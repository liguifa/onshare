// const session = require("./session");
const $ = require("../common/common");
const fs = require("fs");
const streamLength = require("stream-length");
const session = require('express-session')

module.exports = class controller {
    constructor(request, response) {
        this.request = request;
        this.response = response;
    }

    json(data) {
        this.response.setHeader("Access-Control-Allow-Origin","http://localhost:8081");
        this.response.setHeader("Access-Control-Allow-Credentials", "true");
        this.response.send(JSON.stringify(data));
        this.response.end();
    }

    setCookie(key, value, isExpire) {
        this.response.setHeader("Set-Cookie", `${key}=${value};path=/${isExpire ? "" : (";expires=" + new Date("2229/1/1 1:1:1").toGMTString())};HttpOnly`);
    }

    getCookie(key) {
        var cookieString = this.request.headers["cookie"];
        if (cookieString !== undefined) {
            cookieString = cookieString.replace(/\s/g, "");
            var cooikes = cookieString.split(";");
            var cookie = cooikes.find((cookie) => {
                var cookieKeyValue = cookie.split("=");
                return cookieKeyValue[0] === key
            });
            if (cookie) {
                return cookie.split("=")[1];
            }
            return null;
        }
        return null;
    }

    getCurrentUsername() {
        return $.string.decrypt(this.getCookie("auth"));
    }

    setSession(name, value) {
        //session[name] = value;
        this.request.session[name] = value;
    }

    getSession(name) {
        // return session[name];
        return this.reqyest.session[name];
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
        console.log(stream);
        streamLength(stream).then(size => {
            console.log(size);
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