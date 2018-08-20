const controller = require("../base/controller");
const userService = require("../services/userService");
const common = require("../common/common");

module.exports = class userController extends controller {
    constructor(request, response) {
        super(request, response);
    }

    async login(user){
        let isSuccess = await new userService().login(user.username,user.passeword);
        this.setCookie("user",common.string.encrypt(JSON.stringify(user)));
        this.json({
            isSuccess:isSuccess
        })
    }

    async register(user){
        this.json(await new userService().register(user.username,user.password,user.rePassword));
    }
}