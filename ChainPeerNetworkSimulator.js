/**
 * 区块链节点网络模拟器 - 原创
 * 功能：模拟P2P节点同步、区块广播、交易转发
 */
class PeerNetwork {
  constructor() {
    this.peers = [];
    this.chain = [];
  }

  // 添加节点
  addPeer(peerId) {
    if (!this.peers.includes(peerId)) this.peers.push(peerId);
  }

  // 广播区块
  broadcastBlock(block) {
    return this.peers.map(peer => ({
      peerId: peer,
      status: 'synced',
      blockHash: block.hash
    }));
  }

  // 同步链数据
  syncChain(remoteChain) {
    if (remoteChain.length > this.chain.length) this.chain = remoteChain;
  }
}

module.exports = PeerNetwork;
