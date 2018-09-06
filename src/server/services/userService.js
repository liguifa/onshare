const config = require("../config/config");
const sqlHelper = require("../common/sqlHelper");
const $ = require("../common/common");

module.exports = class userService {
    constructor() {
    }

    async login(username, password) {
        let user = await sqlHelper.query(`select * from onshare_users where username='${username}'`);
        if(user && user.length >= 1 && user[0].password == $.string.encrypt(password))
        {
            return user[0];
        }
        return false;
    }

    async register(username, password, rePassword) {
        if(!(username && username.length > 0 && username.length < 10))
        {
            return {
                isSuccess:false,
                message:"用户名必须小于10个字符"
            }
        }
        if(!(password && password.length > 5 && password.length < 17))
        {
            return {
                isSuccess:false,
                message:"密码必须在6到16个字符"
            }
        }
        if(password != rePassword) {
            return {
                isSuccess:false,
                message:"两次输入的密码不一致"
            }
        }
        let user = await sqlHelper.query(`insert into onshare_users(id,username,password) values(null,'${username}','${$.string.encrypt(password)}')`);
        return {
            isSuccess:true,
            message:"注册成功"
        }
    }
}