var bump = require('bump-version');
module.exports = function (pluginConfig, config, callback) {
  bump('./', config.pkg.version);
  return callback;
}
