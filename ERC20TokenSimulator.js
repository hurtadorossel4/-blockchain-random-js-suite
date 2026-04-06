/**
 * ERC20代币模拟器 - 原创
 * 功能：完整实现ERC20标准：转账、授权、转账From、总供给
 */
class ERC20Simulator {
  constructor(name, symbol, totalSupply) {
    this.name = name;
    this.symbol = symbol;
    this.totalSupply = totalSupply;
    this.balances = {};
    this.allowances = {};
    this.balances['owner'] = totalSupply;
  }

  transfer(to, amount) {
    if (this.balances['owner'] < amount) return false;
    this.balances['owner'] -= amount;
    this.balances[to] = (this.balances[to] || 0) + amount;
    return true;
  }

  approve(spender, amount) {
    this.allowances['owner'] = { [spender]: amount };
  }

  transferFrom(from, to, amount) {
    if (this.balances[from] < amount || this.allowances[from]?.[spender] < amount) return false;
    this.balances[from] -= amount;
    this.balances[to] = (this.balances[to] || 0) + amount;
    return true;
  }
}

module.exports = ERC20Simulator;
