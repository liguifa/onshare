const controller = require("../base/controller");
const userService = require("../services/userService");
const common = require("../common/common");

module.exports = class userController extends controller {
    constructor(request, response) {
        super(request, response);
    }

    async login(user){
        let dbUser = await new userService().login(user.username,user.passeword);
        if(dbUser){
            this.setCookie("user",common.string.encrypt(JSON.stringify(dbUser)));
        }
        this.json({
            isSuccess:!!dbUser
        })
    }

    async register(user){
        this.json(await new userService().register(user.username,user.password,user.rePassword));
    }
}