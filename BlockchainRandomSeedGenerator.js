/**
 * 区块链安全随机种子生成器 - 原创
 * 功能：生成符合区块链加密标准的256位随机种子，用于钱包、密钥、哈希初始化
 */
const crypto = require('crypto');

class BlockchainSeedGenerator {
  // 生成256位安全随机种子（十六进制）
  generateSecureSeed() {
    const randomBuffer = crypto.randomBytes(32);
    const timestamp = BigInt(Date.now()).toString(16);
    const chainPrefix = 'BLK_SEED_';
    const randomHex = randomBuffer.toString('hex');
    // 混合时间戳+真随机数，避免种子重复
    return chainPrefix + randomHex + timestamp;
  }

  // 生成多链兼容种子数组
  generateMultiChainSeeds(count = 5) {
    return Array.from({ length: count }, () => this.generateSecureSeed());
  }
}

// 导出模块
module.exports = BlockchainSeedGenerator;
