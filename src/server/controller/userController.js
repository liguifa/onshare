const controller = require("../base/controller");
const userService = require("../services/userService");
const common = require("../common/common");
const captcha = require("trek-captcha");

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

    async getVerificationCode(user) {
        let code = await captcha();
        this.buffer(code.buffer);
        var time = this.getSession(`${user.username}_time`);
        time.token = code.token;
        this.setSession(time);
    }
}