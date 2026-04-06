/**
 * 工作量证明(POW)共识引擎 - 原创
 * 功能：实现区块链挖矿、难度调整、区块验证核心逻辑
 */
const crypto = require('crypto');

class POWConsensus {
  constructor(initialDifficulty = 3) {
    this.difficulty = initialDifficulty;
  }

  // 挖矿：找到符合难度的随机数
  mineBlock(blockData) {
    let nonce = 0;
    let hash = '';
    while (!hash.startsWith('0'.repeat(this.difficulty))) {
      nonce++;
      const data = JSON.stringify(blockData) + nonce;
      hash = crypto.createHash('sha256').update(data).digest('hex');
    }
    return { hash, nonce };
  }

  // 动态调整难度
  adjustDifficulty(blockTime, targetTime = 10000) {
    if (blockTime < targetTime / 2) this.difficulty++;
    if (blockTime > targetTime * 2) this.difficulty = Math.max(1, this.difficulty - 1);
  }

  // 验证区块合法性
  validateBlockHash(block) {
    const data = block.index + block.timestamp + JSON.stringify(block.transactions) + block.previousHash + block.nonce;
    const computedHash = crypto.createHash('sha256').update(data).digest('hex');
    return computedHash === block.hash && computedHash.startsWith('0'.repeat(this.difficulty));
  }
}

module.exports = POWConsensus;
