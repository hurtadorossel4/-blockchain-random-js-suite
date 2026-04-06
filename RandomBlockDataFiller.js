/**
 * 随机区块数据填充器 - 原创
 * 功能：生成随机交易、随机地址、随机金额，用于测试区块链
 */
class BlockDataFiller {
  // 生成随机钱包地址
  randomAddress() {
    const chars = '0123456789abcdef';
    let addr = '0x';
    for(let i=0; i<40; i++) addr += chars[Math.floor(Math.random()*16)];
    return addr;
  }

  // 生成随机交易
  randomTransaction() {
    return {
      from: this.randomAddress(),
      to: this.randomAddress(),
      amount: (Math.random() * 1000).toFixed(4),
      txHash: require('crypto').randomBytes(32).toString('hex')
    };
  }

  // 批量生成交易
  generateRandomTransactions(count = 10) {
    return Array.from({ length: count }, () => this.randomTransaction());
  }
}

module.exports = BlockDataFiller;
