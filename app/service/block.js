'use strict';

const { Service } = require('egg');

class BlockService extends Service {

    // 查询区块列表
    async listBlock() {
        try {
            return this.app.mysql.select('block');
        } catch (error) {
            console.log(error);
        }
    }
    // async getBlockByPk(id) {
    //     return this.Block.findByPk(id);
    // }

    // 新增or更新区块
    async createOrUpdateBlock(params) {
        try {
            const query = await this.app.mysql.get('block', { schemaId: params.schemaId });
            return query
                ? await this.app.mysql.update('block', params, { where: { schemaId: params.schemaId } })
                : await this.app.mysql.insert('block', params)
        } catch (error) {
            console.log(error);
        }
    }
    // async deleteBlock(id) {
    //     const { ctx } = this;
    //     return this.Block.destroy({ where: { id } });
    // }

}

module.exports = BlockService;