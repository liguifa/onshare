const sqlHelper = require("../common/sqlHelper");

module.exports = class documentService{
	constructor(){

	}

	getDocumentsByUserId(userId){
		console.log(userId);
		return sqlHelper.query(`select * from onshare_documents where createBy = ${userId}`);
	}
}