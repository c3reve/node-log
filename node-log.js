const log4js = require('log4js');

module.exports = {

  configure: (type = 'file', level = 'off', config = {}) => {
    return log4js.configure({
      appenders: {
        access: { type, filename: 'log/access.log' },
        system: { type, filename: 'log/system.log' },
        debug: { type, filename: 'log/debug.log' },
        error: { type, filename: 'log/error.log' },
      },
      categories: {
        default: { appenders: ['debug'], level: 'debug' },
        access: { appenders: ['access'], level: 'info' },
        system: { appenders: ['system'], level: 'info' },
        error: { appenders: ['error'], level: 'info' },
        debug: { appenders: ['debug'], level }
      }
    }, config);
  },

  /** 情報の出力等 */
  info: (message, ...args) => log4js.getLogger('system').info(message, ...args),
  /** 到達しないはずのコード等 */
  warn: (message, ...args) => log4js.getLogger('system').warn(message, ...args),
  /** 例外 */
  error: (message, ...args) => log4js.getLogger('error').error(message, ...args),
  /** 異常終了を伴うような致命的なエラー */
  fatal: (message, ...args) => log4js.getLogger('error').fatal(message, ...args),
  /** デバッグ用の値確認等 */
  debug: (message, ...args) => log4js.getLogger('debug').debug(message, ...args),
  /**メソッドの先頭等 */
  trace: (message, ...args) => log4js.getLogger('debug').trace(message, ...args),

  express: log4js.connectLogger(log4js.getLogger('access'), { level: 'info' })
};
