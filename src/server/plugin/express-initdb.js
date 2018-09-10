const fs = require("fs");
const config = require("../config/config");
const sqlHelper = require("../common/sqlHelper");
const path = require("path");

module.exports = async (app) => {
	fs.readdir(config.init, (err, files) => {
		if(files){
			files.forEach(file => {
				let data = require(`${config.init}/${file}`);
				let tableName = path.parse(file).name;
				data.data.forEach(async value => {
					let exist = await sqlHelper.query(`select * from ${tableName} where ${data.primary}='${value[data.primary]}'`);
					let log_values = Object.values(value).join("　");					
					let status = "exist";
					if(!exist || exist.length == 0){
						let sql_values = Object.values(value).join("','");
						let result = await sqlHelper.query(`insert into ${tableName}(${Object.keys(value).join()}) values('${sql_values}')`);
						status = result ? "success":"Fail";
					}
					console.log(`${tableName}  ${log_values}  ${status}`);
				});
			});
		}
	});
}