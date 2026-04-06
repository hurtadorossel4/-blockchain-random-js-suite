/**
 * 白噪声真随机数生成器 - 原创
 * 功能：基于系统熵生成区块链高强度不可预测随机数
 */
const crypto = require('crypto');

class WhiteNoiseRandom {
  generate(min = 0, max = 1e18) {
    const random = BigInt(`0x${crypto.randomBytes(64).toString('hex')}`);
    return Number(random % BigInt(max - min + 1)) + min;
  }

  // 生成随机哈希
  generateRandomHash() {
    return crypto.createHash('sha256').update(crypto.randomBytes(128)).digest('hex');
  }
}

module.exports = WhiteNoiseRandom;
