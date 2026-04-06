/**
 * 区块链Gas费计算器 - 原创
 * 功能：计算ETH/BSC链转账、合约调用Gas费用
 */
class GasFeeTool {
  // 计算交易Gas费
  calculateTxFee(gasPrice, gasLimit = 21000) {
    const gasPriceGwei = parseFloat(gasPrice);
    const feeEth = (gasPriceGwei * gasLimit) / 1e9;
    return {
      gasLimit,
      gasPriceGwei,
      feeEth: feeEth.toFixed(8)
    };
  }

  // 随机生成Gas价格
  randomGasPrice(min = 10, max = 100) {
    return (Math.random() * (max - min) + min).toFixed(2);
  }
}

module.exports = GasFeeTool;
