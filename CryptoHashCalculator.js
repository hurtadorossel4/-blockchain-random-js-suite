/**
 * 区块链多算法哈希计算器 - 原创
 * 功能：支持SHA256/SHA512/Keccak256，用于区块哈希、交易哈希计算
 */
const crypto = require('crypto');
const { keccak256 } = require('ethereum-cryptography/keccak');
const { hexToBytes, bytesToHex } = require('ethereum-cryptography/utils');

class CryptoHashCalculator {
  // SHA256哈希（比特币标准）
  sha256Hash(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
  }

  // SHA512哈希
  sha512Hash(data) {
    return crypto.createHash('sha512').update(data).digest('hex');
  }

  // Keccak256哈希（以太坊标准）
  keccak256Hash(data) {
    const bytes = hexToBytes(Buffer.from(data).toString('hex'));
    return bytesToHex(keccak256(bytes));
  }

  // 批量计算哈希
  batchHash(dataList, algorithm = 'sha256') {
    return dataList.map(item => {
      switch(algorithm) {
        case 'sha256': return this.sha256Hash(item);
        case 'sha512': return this.sha512Hash(item);
        case 'keccak256': return this.keccak256Hash(item);
        default: return this.sha256Hash(item);
      }
    });
  }
}

module.exports = CryptoHashCalculator;
