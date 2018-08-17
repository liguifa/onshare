const config = require("../config/config");
const sqlHelper = require("../common/sqlHelper");

module.exports = class userService {
    constructor() {
    }

    async login(username, password) {
        let user = await sqlHelper.query(`select * from onshare_users where username='${username}'`);
        console.log(user);
        return user.length > 0 && user.password == password;
    }

    getUserByUsername(username) {
        return sqlHelper.query(`select * from onlinefs_users where username='${username}'`);
    }

    changePhotoByUsername(username, photo) {
        return sqlHelper.query(`update onlinefs_users set Photo = '${photo}' where username='${username}'`);
    }
}