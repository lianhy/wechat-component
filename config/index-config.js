let HOST = 'https://www.baidu.com';

let ENV = 'PROD'; // 设置环境 测试 DEV, 正式环境 PROD
if (ENV === 'PROD') {
  // 正式环境 host
  HOST = 'https://www.baidu.com';
} else {
  // 测试环境 host
  HOST = 'https://www.baidu.com';
}

module.exports = {
  HOST: HOST
} 
