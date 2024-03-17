/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // 关闭csrf安全校验 不然jwt会报错
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    // domainWhiteList: ['http://10.81.12.67:9527'] // 将域名加入白名单
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1708408379437_6934";

  // jwt key
  config.jwtKeys = "xaweb";

  // add your middleware config here
  config.middleware = [];

  // 跨域配置
  config.cors = {
    origin: "http://localhost:5556", // 匹配规则  域名+端口  *则为全匹配
    allowMethods: "GET, POST, PUT, DELETE, OPTIONS", // 允许请求的方式
  };

  // mysql数据库配置
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'lowcode',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};