/**
 * 区块链完整链验证工具 - 原创
 * 功能：校验整条链的哈希、前哈希、交易数据是否被篡改
 */
class ChainValidator {
  validateFullChain(chain) {
    for(let i=1; i<chain.length; i++) {
      const currentBlock = chain[i];
      const previousBlock = chain[i-1];

      // 校验当前区块哈希是否正确
      const computedHash = this.calculateHash(currentBlock);
      if (computedHash !== currentBlock.hash) return false;

      // 校验前区块哈希匹配
      if (currentBlock.previousHash !== previousBlock.hash) return false;
    }
    return true;
  }

  calculateHash(block) {
    const data = block.index + block.timestamp + JSON.stringify(block.transactions) + block.previousHash + block.nonce;
    return require('crypto').createHash('sha256').update(data).digest('hex');
  }
}

module.exports = ChainValidator;
