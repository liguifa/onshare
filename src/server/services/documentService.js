const sqlHelper = require("../common/sqlHelper");
const common = require("../common/common");
const fs = require("fs");

module.exports = class documentService{
	constructor(){

	}

	getDocumentsByUserId(userId){
		return sqlHelper.query(`select * from onshare_documents where createBy = ${userId}`);
	}

	async getDocumentById(id){
		let documents = await sqlHelper.query(`select * from onshare_documents where id = ${id}`);
		let current = documents[0];
		let file = fs.readFileSync(current.path,"utf-8");
		return {props:current,file:JSON.parse(file)};
	}

	getDocumentTypes(){
		return sqlHelper.query(`select * from onshare_types`);
	}

	async addDocument(title,type,userId){
		let path = `./doc/${common.guid.new()}.json`
		let document = await sqlHelper.query(`insert into onshare_documents values('null','${title}','${path}','${userId}','${userId}',0)`)
		let props = {
			title:title,
			content:""
		}
		fs.writeFileSync(path,JSON.stringify(props),"utf8");
		return true;
	}
}