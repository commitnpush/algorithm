// https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript

const solutionOf음양더하기 = (
  absolutes: number[],
  signs: boolean[]
): number => {
  return absolutes.reduce(
    (acc, cur, index) => (signs[index] ? acc + cur : acc - cur),
    0
  );
};

describe("음양더하기", () => {
  test("case1", () => {
    expect(solutionOf음양더하기([4, 7, 12], [true, false, true])).toBe(9);
  });
  test("case1", () => {
    expect(solutionOf음양더하기([1, 2, 3], [false, false, true])).toBe(0);
  });
});
