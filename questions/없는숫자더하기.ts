// https://programmers.co.kr/learn/courses/30/lessons/86051?language=javascript

const solutionOf없는숫자더하기 = (numbers: number[]): number => {
  return 45 - numbers.reduce((acc, curr) => acc + curr);
};

describe("없는숫자더하기", () => {
  test("case1", () => {
    expect(solutionOf없는숫자더하기([1, 2, 3, 4, 6, 7, 8, 0])).toBe(14);
  });
  test("case2", () => {
    expect(solutionOf없는숫자더하기([5, 8, 4, 0, 6, 7, 9])).toBe(6);
  });
});
