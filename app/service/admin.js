const Service = require('egg').Service;

class AdminService extends Service {

    // 查询页面schema
    async getPageSchema(page_type) {
        try {
            const params = {
                page_type
            };
            const result = await this.app.mysql.get('lowcode', params);
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    // 保存页面schema
    async savePageSchema(params) {
        try {
            const row = {
                page_schema: params.page_schema,
            };
            // 主键是自定义的page_type，需要在 `where` 里配置
            const options = {
                where: {
                    page_type: params.page_type
                }
            };
            const result = await this.app.mysql.update('lowcode', row, options);
            return result;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = AdminService;
