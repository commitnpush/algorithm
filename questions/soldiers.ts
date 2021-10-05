const soldiersSolution = (soldiers: number[]) => {
  const dp = [...Array(soldiers.length).fill(1)];
  for (let i = 1; i < soldiers.length; i++) {
    for (let j = 0; j < i; j++) {
      // 앞에 있는 병사가 뒤에 있는 병사보다 강하면
      if (soldiers[j] > soldiers[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};

console.debug(soldiersSolution([15, 11, 4, 8, 5, 2, 4]));
