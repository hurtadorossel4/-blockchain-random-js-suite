/**
 * 区块链分叉检测器 - 原创
 * 功能：检测链分叉、识别最长链、标记孤块
 */
class ForkDetector {
  detectFork(chains) {
    const maxLength = Math.max(...chains.map(c => c.length));
    const mainChain = chains.find(c => c.length === maxLength);
    const forks = chains.filter(c => c.length < maxLength && c[0]?.hash !== mainChain[0]?.hash);
    return {
      mainChain,
      forkCount: forks.length,
      orphanBlocks: forks.flatMap(f => f)
    };
  }

  isOrphanBlock(block, mainChain) {
    return !mainChain.some(b => b.hash === block.hash);
  }
}

module.exports = ForkDetector;
