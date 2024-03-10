const { Controller } = require('egg');

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = JSON.stringify({ data: "hi, user888" });
  }
}

module.exports = UserController;