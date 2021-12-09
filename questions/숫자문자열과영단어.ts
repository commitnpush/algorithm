// https: //programmers.co.kr/learn/courses/30/lessons/81301?language=javascript

const solutionOf숫자문자열과영단어 = (s: string): number => {
  const wordToNumberMap = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  return Number(
    s
      .match(new RegExp(`${Object.keys(wordToNumberMap).join("|")}|\\d`, "g"))
      .map((word) => wordToNumberMap[word] || word)
      .join("")
  );
};

describe("숫자문자열과영단어", () => {
  test("case1", () => {
    expect(solutionOf숫자문자열과영단어("one4seveneight")).toBe(1478);
  });
  test("case2", () => {
    expect(solutionOf숫자문자열과영단어("23four5six7")).toBe(234567);
  });
  test("case3", () => {
    expect(solutionOf숫자문자열과영단어("2three45sixseven")).toBe(234567);
  });
  test("case4", () => {
    expect(solutionOf숫자문자열과영단어("123")).toBe(123);
  });
});
