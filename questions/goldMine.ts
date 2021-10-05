const goldMineSolution = (goldLines: number[][]) => {
  const dp = [[...goldLines[0]]];
  for (let line = 1; line < goldLines.length; line++) {
    dp[line] = [];
    for (let i = 0; i < goldLines[0].length; i++) {
      dp[line][i] =
        Math.max(
          i === 0 ? 0 : dp[line - 1][i - 1],
          dp[line - 1][i],
          i === goldLines[0].length - 1 ? 0 : dp[line - 1][i + 1]
        ) + goldLines[line][i];
    }
  }
  console.debug(dp[0], dp[1], dp[2]);
  return Math.max(...dp[dp.length - 1]);
};

console.debug(
  goldMineSolution([
    [1, 4, 3],
    [4, 5, 6],
    [2, 3, 1],
  ])
);
