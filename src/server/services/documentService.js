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

	async addShare(userId,model,number,password,documentId){
		let result = await sqlHelper.query(`insert into onshare_share values('null',${model},'${number}','${password}',${new Date().getTime()}, ${documentId})`);
		return {isSuccess:result != null};
	}

	async watch(userId,number,password) {
		let share = await sqlHelper.query(`select * from onshare_share where id = ${number}`);
		if(share.password == password){
			let document = await sqlHelper.query(`select * from onshare_documnets where id = ${share.documentId}`);
			
		}
	}
}