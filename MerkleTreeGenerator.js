/**
 * 默克尔树生成器 - 原创
 * 功能：用于区块链交易默克尔根计算，轻量级实现
 */
const crypto = require('crypto');

class MerkleTree {
  constructor(leaves) {
    this.leaves = leaves.map(l => this.hash(l));
    this.root = this.buildRoot();
  }

  hash(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
  }

  buildRoot() {
    let nodes = this.leaves;
    while (nodes.length > 1) {
      const temp = [];
      for (let i=0; i<nodes.length; i+=2) {
        const left = nodes[i];
        const right = nodes[i+1] || left;
        temp.push(this.hash(left + right));
      }
      nodes = temp;
    }
    return nodes[0];
  }

  getRoot() {
    return this.root;
  }
}

module.exports = MerkleTree;
