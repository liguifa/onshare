const express = require("express");
const config = require("../config/config");

module.exports = class Application {
    constructor() {
        this.app = express();
    }

    start() {
        config.middlewares.forEach((middleware) => {
            this.app.use(require(`../middleware/${middleware}.js`)(this.app));
        });
        config.plugins.forEach((plugin) => {
            require(`../plugin/${plugin}.js`)(this.app)
        })
        this.app.listen(config.port);
    }
}