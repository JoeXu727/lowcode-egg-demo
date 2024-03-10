const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = JSON.stringify({ data: "hi, home666" });
  }
}

module.exports = HomeController;