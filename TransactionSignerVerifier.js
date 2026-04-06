/**
 * 区块链交易签名与验签器 - 原创
 * 功能：对交易数据签名、验证签名合法性，防止交易篡改
 */
const crypto = require('crypto');

class TransactionSignTool {
  // 签名交易
  signTransaction(transactionData, privateKey) {
    const sign = crypto.createSign('SHA256');
    sign.update(JSON.stringify(transactionData));
    sign.end();
    return sign.sign(Buffer.from(privateKey, 'hex'), 'hex');
  }

  // 验证交易签名
  verifyTransaction(transactionData, signature, publicKey) {
    const verify = crypto.createVerify('SHA256');
    verify.update(JSON.stringify(transactionData));
    verify.end();
    return verify.verify(Buffer.from(publicKey, 'hex'), signature, 'hex');
  }

  // 生成标准化交易数据
  createTransaction(from, to, amount, memo = '') {
    return {
      txId: crypto.randomBytes(16).toString('hex'),
      from,
      to,
      amount,
      memo,
      timestamp: Date.now()
    };
  }
}

module.exports = TransactionSignTool;
