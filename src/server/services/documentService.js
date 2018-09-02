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
		let document = await sqlHelper.query(`insert into onshare_documents values('null','${title}','${path}','${userId}','${userId}',0,${type})`)
		console.log(document);
		await sqlHelper.query(`insert into onshare_acl values('null',${document.insertId},${userId})`);
		let props = {
			title:title,
			content:""
		}
		fs.writeFileSync(path,JSON.stringify(props),"utf8");
		return true;
	}

	async addShare(userId,model,number,password,documentId,type){
		console.log(`insert into onshare_share values('null',${model},'${number}','${password}',${new Date().getTime()}, ${documentId}, ${type})`);
		let result = await sqlHelper.query(`insert into onshare_share values('null',${model},'${number}','${password}',${new Date().getTime()}, ${documentId}, ${type})`);
		return {isSuccess:result != null,id:result.insertId};
	}

	async watch(userId,number,password) {
		console.log(`select * from onshare_share where id = ${number}`);
		let share = (await sqlHelper.query(`select * from onshare_share where id = ${number}`))[0];
		if(share.password == password || share.type == 1){
			console.log(`insert into onshare_acl values('null',${share.documentId},${userId})`)
			let result = await sqlHelper.query(`insert into onshare_acl values('null',${share.documentId},${userId})`);
			return result != null;
		}
		return false;
	}

	async export(id) {
		let document = (await sqlHelper.query(`select * from onshare_documents where id = ${id}`))[0]
		let writer = fs.createWriteStream(`./tmp/temp-${document.id}.temp`);
		let file = fs.readFileSync(document.path,"utf-8");
        writer.write(JSON.parse(file).content);
		writer.end();
		return new Promise((resolve,reject) => { 
			writer.on('finish', () => {
				console.log(1234567788889);
				resolve({stream:fs.createReadStream(`./tmp/temp-${document.id}.temp`),filename:`${document.title}.txt`});
			});
		});
	}

	async getShare(id) {
		return (await sqlHelper.query(`select * from onshare_share where id=${id}`))[0];
	}

	async deleteDocument(id) {
		let result = await sqlHelper.query(`delete from onshare_documents where id=${id}`);
		return result != null;
	}
}