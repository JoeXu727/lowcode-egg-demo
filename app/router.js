/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/admin', controller.admin.getSchema);
  router.post('/admin', controller.admin.saveSchema);
  router.get('/user', controller.user.getUserInfo);
  router.post('/user', controller.user.saveUserInfo);
  router.get('/block', controller.block.listBlocks);
  router.post('/block', controller.block.createBlock);
};