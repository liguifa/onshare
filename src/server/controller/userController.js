const controller = require("../base/controller");
const userService = require("../services/userService");

module.exports = class userController extends controller {
    constructor(request, response) {
        super(request, response);
    }

    async login(user){
        let isSuccess = await new userService().login(user.username,user.passeword)
        this.json({
            isSuccess:isSuccess
        })
    }
}