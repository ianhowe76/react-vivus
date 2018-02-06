const getConfig = require('hjs-webpack');

module.exports = getConfig({
  in: 'demo/app.js',
  out: 'public',
  clearBeforeBuild: '!(images)',
});
