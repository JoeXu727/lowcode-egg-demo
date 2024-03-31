const Service = require('egg').Service;

class UserService extends Service {

    // 查询用户信息
    async getUserInfo() {
        try {
            const result = await this.app.mysql.get('userInfo');
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    // 保存用户信息
    async saveUserInfo(params) {
        try {
            const row = params;
            const result = await this.app.mysql.update('userInfo', row);
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UserService;