// https: programmers.co.kr/learn/courses/30/lessons/1845

function solutionOf포켓몬(nums: number[]) {
  const max = nums.length / 2;
  const numsSet = new Set(nums);

  return Math.min(max, Array.from(numsSet).length);
}

describe("", () => {
  test("1", () => {
    expect(solutionOf포켓몬([3, 1, 2, 3])).toBe(2);
  });
  test("2", () => {
    expect(solutionOf포켓몬([3, 3, 3, 2, 2, 4])).toBe(3);
  });
  test("3", () => {
    expect(solutionOf포켓몬([3, 3, 3, 2, 2, 2])).toBe(2);
  });
});
