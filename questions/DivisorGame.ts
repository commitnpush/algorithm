const table = { 1: false };
const divisors = { 1: [1] };

function divisorGame(n: number): boolean {
  if (typeof table[n] !== "undefined") return table[n];
  if (n === 1) return false;
  return getDivisors(n).some((divisor) => {
    const result = (table[n - divisor] = divisorGame(n - divisor));
    console.debug(n, divisor, !result);
    return !result;
  });
}

function getDivisors(n) {
  if (divisors[n]) return divisors[n];
  const arr = [1];
  const max = Math.floor(n / 2);
  for (let i = 2; i <= max; i++) {
    if (n % i === 0) arr.push(i);
  }
  return (divisors[n] = arr);
}

console.debug(divisorGame(5));
