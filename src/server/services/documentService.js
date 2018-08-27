const sqlHelper = require("../common/sqlHelper");
const common = require("../common/common");
const fs = require("fs");

module.exports = class documentService{
	constructor(){

	}

	getDocumentsByUserId(userId){
		return sqlHelper.query(`select * from onshare_documents as doc 
								join onshare_acl as acl on doc.id = acl.resourceId
								where acl.userId = ${userId}`);
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
		console.log(document);
		await sqlHelper.query(`insert into onshare_acl values('null',${document.insertId},${userId})`);
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
		console.log(`select * from onshare_share where id = ${number}`);
		let share = (await sqlHelper.query(`select * from onshare_share where id = ${number}`))[0];
		if(share.password == password){
			console.log(`insert into onshare_acl values('null',${share.documentId},${userId})`)
			let result = await sqlHelper.query(`insert into onshare_acl values('null',${share.documentId},${userId})`);
			return result != null;
		}
		return false;
	}
}