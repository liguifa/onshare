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
        logger.info("app start");
        logger.info("--------------------------------------------------");
        logger.info(` port       | ${config.port} `);
        logger.info(` url        | http://localhost:${config.port} `);
        logger.info(` path       | ${__dirname}`);
        logger.info(` middleware | ${config.middlewares.join(',')} `)
        logger.info(` plugin     | ${config.plugins.join(',')} `)
        logger.info("--------------------------------------------------");
    }
}