const solutionOfCoin = (target: number, coins: number[]): number => {
  const results = Array(target + 1).fill(Number.MAX_VALUE);
  results[0] = 0;
  for (const coin of coins) {
    for (let i = coin; i <= target; i++) {
      // i - coin을 만들 수 있다면 i 또한 만들수 있다.
      if (results[i - coin] !== Number.MAX_VALUE) {
        results[i] = Math.min(results[i - coin] + 1, results[i]);
      }
    }
  }
  return results[target];
};

console.debug(solutionOfCoin(11, [2, 3, 5]));
