// https://programmers.co.kr/learn/courses/30/lessons/67256?language=javascript

const solutionOf키패드누르기 = (numbers: number[], hand: "left" | "right") => {
  const handChar = hand === "left" ? "L" : "R";
  let lastLeft = 10;
  let lastRight = 10;
  const distances = {
    2: [3, 1, 0, 1, 2, 1, 2, 3, 2, 3, 4],
    5: [2, 2, 1, 2, 1, 0, 1, 2, 1, 2, 3],
    8: [1, 3, 2, 3, 2, 1, 2, 1, 0, 1, 2],
    0: [0, 4, 3, 4, 3, 2, 3, 2, 1, 2, 1],
  };
  return numbers
    .map((number) => {
      switch (number) {
        case 1:
        case 4:
        case 7:
          lastLeft = number;
          return "L";
        case 3:
        case 6:
        case 9:
          lastRight = number;
          return "R";
        default: {
          const leftDistance = distances[number][lastLeft];
          const rightDistance = distances[number][lastRight];
          if (leftDistance < rightDistance) {
            lastLeft = number;
            return "L";
          }
          if (leftDistance > rightDistance) {
            lastRight = number;
            return "R";
          }
          if (handChar === "L") {
            lastLeft = number;
          } else {
            lastRight = number;
          }
          return handChar;
        }
      }
    })
    .join("");
};

describe("solutionOf키패드누르기", () => {
  test("case1", () => {
    expect(
      solutionOf키패드누르기([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")
    ).toBe("LRLLLRLLRRL");
  });
});
