'use strict';

const Controller = require('egg').Controller;

class BlockController extends Controller {

    async listBlocks() {
        const { ctx } = this;
        const blocks = await ctx.service.block.listBlock();
        ctx.body = {
            code: 0,
            data: blocks,
        };
    }
    // async getBlock() {
    //     const { ctx } = this;
    //     const { id } = ctx.params;
    //     const block = await ctx.service.block.getBlockByPk(id);
    //     ctx.body = {
    //         code: 0,
    //         data: block,
    //     };
    // }

    // 新增or更新区块
    async createBlock() {
        const { ctx } = this;
        const { block } = ctx.request.body;
        const result = await ctx.service.block.createOrUpdateBlock(block);
        ctx.logger.info('create block result: ', result);
        ctx.body = {
            code: 0,
            message: '保存区块成功',
        };
    }

    // async deleteBlock() {
    //     const { ctx } = this;
    //     const { id } = ctx.params;
    //     const result = await ctx.service.block.deleteBlock(id);
    //     ctx.logger.info('delete block result: ', result);
    //     ctx.body = {
    //         code: 0,
    //         message: '删除区块成功',
    //     };
    // }

}

module.exports = BlockController;