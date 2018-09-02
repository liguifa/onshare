const controller = require("../base/controller");
const documentService = require("../services/documentService");
const common = require("../common/common");
const fs = require("fs");

module.exports = class documentController extends controller {
    constructor(request, response) {
        super(request, response);
    }

    async documents(){
        let user = JSON.parse(common.string.decrypt(this.getCookie("user")));
        this.json(await new documentService().getDocumentsByUserId(user.id));
    }

    async document(doc){
        let currentDocument = await new documentService().getDocumentById(doc.id)
        this.response.socket.on("update",content => {
            fs.writeFileSync(currentDocument.props.path,content,"utf8");
        });
        this.json(Object.assign(currentDocument.file,currentDocument.props));
    }

    async types(){
        this.json(await new documentService().getDocumentTypes());
    }

    async addDocument(document){
        let user = JSON.parse(common.string.decrypt(this.getCookie("user")));
        let result = await new documentService().addDocument(document.title,document.type,user.id);
        this.json({
            isSuccess:result
        });
    }

    async share(share){
        let user = JSON.parse(common.string.decrypt(this.getCookie("user")));
        this.json(await new documentService().addShare(user.id,share.model,share.number,share.password,share.documentId,share.type));
    }

    async watch(share){
        let user = JSON.parse(common.string.decrypt(this.getCookie("user")));
        this.json({
            isSuccess:await new documentService().watch(user.id,share.number,share.password)
        });
    }

    async export(doc){
        let result = await new documentService().export(doc.id);
        this.stream(result.stream,"application/octet-stream",result.filename);
    }

    async getShare(share){
        this.json(await new documentService().getShare(share.id));
    }

    async deleteDocument(document){
        this.json({
            isSuccess:await new documentService().deleteDocument(document.id)
        })
    }
}