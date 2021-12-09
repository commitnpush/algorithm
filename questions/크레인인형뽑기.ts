// https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript

const solutionOf크레인인형뽑기 = (
  board: number[][],
  moves: number[]
): number => {
  const basket: number[] = [];
  return moves.reduce((acc, move) => {
    let doll = 0;

    // find doll
    for (let i = 0; i < board.length; i++) {
      doll = board[i][move - 1];
      if (doll !== 0) {
        board[i][move - 1] = 0;
        break;
      }
    }
    if (doll === 0) return acc;

    // comparison
    const lastDoll = basket.pop();
    if (lastDoll === doll) {
      return acc + 2;
    }
    if (lastDoll) {
      basket.push(lastDoll);
    }
    basket.push(doll);
    return acc;
  }, 0);
};

describe("크레인인형뽑기", () => {
  test("case1", () => {
    expect(
      solutionOf크레인인형뽑기(
        [
          [0, 0, 0, 0, 0],
          [0, 0, 1, 0, 3],
          [0, 2, 5, 0, 1],
          [4, 2, 4, 4, 2],
          [3, 5, 1, 3, 1],
        ],
        [1, 5, 3, 5, 1, 2, 1, 4]
      )
    ).toBe(4);
  });
});
