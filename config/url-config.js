let config = require('./index-config.js');
let HOST = config.HOST;

function FullUrl(route, host = HOST) {
  return `${host}/${route}`;
}

module.exports = {
  headerContentQueryStr: {
    "content-type": "application/x-www-form-urlencoded"
  },
  headerContentJson: {
    'content-type': 'application/json'
  },
  getDemo: FullUrl("xx/xx.json"),
  getChildren: "https://apis.map.qq.com/ws/district/v1/getchildren",
};