/**
 * 区块链事件发射器 - 原创
 * 功能：触发区块生成、交易成功、钱包连接等事件
 */
const EventEmitter = require('events');

class ChainEvent extends EventEmitter {
  constructor() {
    super();
    this.registerEvents();
  }

  registerEvents() {
    this.on('blockMined', (block) => console.log(`Block mined: ${block.hash}`));
    this.on('txSuccess', (tx) => console.log(`Tx success: ${tx.txId}`));
    this.on('walletConnected', (addr) => console.log(`Wallet connected: ${addr}`));
  }

  emitBlockMined(block) { this.emit('blockMined', block); }
  emitTxSuccess(tx) { this.emit('txSuccess', tx); }
  emitWalletConnected(addr) { this.emit('walletConnected', addr); }
}

module.exports = ChainEvent;
