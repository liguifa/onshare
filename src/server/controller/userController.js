const controller = require("../base/controller");
const userService = require("../services/userService");
const common = require("../common/common");
const captcha = require("trek-captcha");

module.exports = class userController extends controller {
    constructor(request, response) {
        super(request, response);
    }

    async login(user){
        if(user.code !== this.request.sessions["captcha"] && user.type == 0){
            this.json({
                isSuccess:false,
                message:"验证码错误"
            });
            return;
        }
        let dbUser = await new userService().login(user.username,user.password,user.type);
        if(dbUser){
            this.response.cookies["user"] = common.string.encrypt(JSON.stringify(dbUser));
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
        this.response.sessions[`captcha`] = code.token;
        this.buffer(code.buffer);
    }
}