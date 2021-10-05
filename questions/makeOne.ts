const makeOneSolution = (n: number) => {
  const results = [0, 0];
  for (let i = 2; i <= n; i++) {
    // 현재의 수에서 1을 빼는 경우
    results[i] = results[i - 1] + 1;
    // 현재의 수가 2로 나누어 떨어지는 경우
    if (i % 2 === 0) {
      results[i] = Math.min(results[i], results[i / 2]) + 1;
    }
    if (i % 3 === 0) {
      results[i] = Math.min(results[i], results[i / 3]) + 1;
    }
    if (i % 5 === 0) {
      results[i] = Math.min(results[i], results[i / 5]) + 1;
    }
  }
  return results[n];
};

console.debug(makeOneSolution(11));
