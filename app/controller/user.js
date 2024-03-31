const { Controller } = require('egg');

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = JSON.stringify({ data: "hi, user888" });
  }

  // 查询用户信息
  async getUserInfo() {
    const { ctx } = this;
    const result = await ctx.service.user.getUserInfo();
    ctx.body = result;
  }

  // 保存用户信息
  async saveUserInfo() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.user.saveUserInfo(params);
    if (result) {
      ctx.body = {
        status: 200,
        msg: '保存成功',
        data: result,
      };
    } else {
      ctx.body = {
        status: 201,
        msg: '保存失败',
        data: {},
      };
    }
  }
}

module.exports = UserController;