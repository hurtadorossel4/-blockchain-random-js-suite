/**
 * IPFS CID生成器（模拟） - 原创
 * 功能：生成区块链NFT/存储用IPFS CID哈希
 */
const crypto = require('crypto');

class IPFSCidCreator {
  generateCid(data) {
    const hash = crypto.createHash('sha256').update(JSON.stringify(data)).digest('hex');
    return `Qm${hash.slice(0, 44)}`;
  }

  generateRandomCid() {
    return this.generateCid(crypto.randomBytes(64).toString('hex'));
  }
}

module.exports = IPFSCidCreator;
