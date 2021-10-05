function countArrangement(n: number): number {
  let result = 0;
  const perms = Array(n);
  return result;
}

function getPermutations(array: number[]): number[][] {
  const results = [];

  if (array.length === 1) return array.map((value) => [value]);
  array.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1, 0)];
    const permutations = getPermutations(rest).map((permutation) => [
      fixed,
      ...permutation,
    ]);
    results.push(...permutations);
  });
  return results;
}

console.debug(...getPermutations([1, 2, 3, 4]));
