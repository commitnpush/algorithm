// https://programmers.co.kr/learn/courses/30/lessons/82612?language=javascript

function solutionOf부족한금액(
  price: number,
  money: number,
  count: number
): number {
  // let totalPrice = 0;
  // for (let i = 1; i <= count; i++) {
  //   totalPrice += i * price;
  // }
  // return totalPrice > money ? totalPrice - money : 0;

  // 가우스 공식
  const result = (price * count * (count + 1)) / 2 - money;
  return result > 0 ? result : 0;
}

describe("solutionOf부족한금액", () => {
  test("case 1", () => {
    expect(solutionOf부족한금액(3, 20, 4)).toBe(10);
  });
  test("case 2", () => {
    expect(solutionOf부족한금액(20, 10, 1)).toBe(10);
  });
  test("case 3", () => {
    expect(solutionOf부족한금액(1, 1, 3)).toBe(5);
  });
});
