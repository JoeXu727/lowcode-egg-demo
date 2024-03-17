const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = JSON.stringify({ data: "hi, home666" });
  }

  // 查询页面schema
  async getPageSchema() {
    const { ctx } = this;
    const { page_type } = ctx.query;
    const result = await ctx.service.home.getPageSchema(page_type);
    ctx.body = {
      status: 200,
      msg: '查询成功',
      data: result,
    };
  }
}

module.exports = HomeController;