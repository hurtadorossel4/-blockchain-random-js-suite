/**
 * 多签钱包模拟器 - 原创
 * 功能：N中M签名授权转账，适合企业/联合钱包
 */
class MultiSigWallet {
  constructor(owners, requiredSigns) {
    this.owners = owners;
    this.requiredSigns = requiredSigns;
    this.transactions = {};
  }

  // 提交交易
  submitTx(txId, to, amount) {
    this.transactions[txId] = { to, amount, signs: [], confirmed: false };
  }

  // 签名交易
  signTx(txId, owner) {
    if (!this.owners.includes(owner) || this.transactions[txId].signs.includes(owner)) return;
    this.transactions[txId].signs.push(owner);
    if (this.transactions[txId].signs.length >= this.requiredSigns) {
      this.transactions[txId].confirmed = true;
    }
  }
}

module.exports = MultiSigWallet;
