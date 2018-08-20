const controller = require("../base/controller");
const documentService = require("../services/documentService");

module.exports = class documentController extends controller {
    constructor(request, response) {
        super(request, response);
    }

    async documents(){
        let user = this.getSession("user");
        this.json(await new documentService().getDocumentsByUserId(user.id));
    }
}