// link : https://programmers.co.kr/learn/courses/30/lessons/77484

type Lottos = [number, number, number, number, number, number];

function solutionOf로또(lottos: Lottos, winNums: Lottos) {
  const min = winNums.filter((winNum) => lottos.includes(winNum)).length;
  const max = lottos.reduce((acc, curr) => acc + (curr === 0 ? 1 : 0), min);
  return [Math.min(7 - max, 6), Math.min(7 - min, 6)];
}

describe("test", () => {
  test("test", () => {
    expect(
      solutionOf로또([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])
    ).toContain(3);
    expect(
      solutionOf로또([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])
    ).toContain(5);
  });
});
