const config = require("../config/config");
const express = require("express");

module.exports = (app) => {
	app.use(express.static(config.static.path, config.static.args));
}