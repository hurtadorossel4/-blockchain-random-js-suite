/**
 * 权益证明(POS)共识模拟器 - 原创
 * 功能：模拟质押、出块节点选举、惩罚机制
 */
class POSConsensus {
  constructor() {
    this.stakers = {};
  }

  // 质押代币
  stake(address, amount) {
    this.stakers[address] = (this.stakers[address] || 0) + amount;
  }

  // 选举出块节点（权重随机）
  electBlockProducer() {
    const totalStake = Object.values(this.stakers).reduce((a,b)=>a+b,0);
    let random = Math.random() * totalStake;
    for (const [addr, stake] of Object.entries(this.stakers)) {
      random -= stake;
      if (random <= 0) return addr;
    }
  }

  // 惩罚作恶节点
  slash(address) {
    this.stakers[address] = Math.floor(this.stakers[address] * 0.5);
  }
}

module.exports = POSConsensus;
