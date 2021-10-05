const temps: number[] = [];

const solution = (houses: number[]) => {
  const n = houses.length - 1;
  if (n === 0) return (temps[0] = houses[0]);
  if (n === 1) return (temps[1] = Math.max(houses[0], houses[1]));
  if (typeof temps[n - 2] === "undefined") {
    temps[n - 2] = solution(houses.slice(0, n - 1));
  }
  if (typeof temps[n - 1] === "undefined") {
    temps[n - 1] = solution(houses.slice(0, n));
  }
  return (temps[n] = Math.max(temps[n - 2] + houses[n], temps[n - 1]));
};

console.debug(solution([1, 0, 3, 5]));
