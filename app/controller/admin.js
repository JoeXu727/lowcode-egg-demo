const { Controller } = require('egg');

class AdminController extends Controller {
    // 查询页面schema
    async getSchema() {
        const { ctx } = this;
        const { page_type } = ctx.query;
        const result = await ctx.service.admin.getPageSchema(page_type);
        ctx.body = {
            status: 200,
            msg: '查询成功',
            data: result,
        };
    }
    // 保存页面schema
    async saveSchema() {
        const { ctx } = this;
        const params = ctx.request.body;
        const result = await ctx.service.admin.savePageSchema(params);
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

module.exports = AdminController;