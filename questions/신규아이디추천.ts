// https://programmers.co.kr/learn/courses/30/lessons/72410?language=javascript

const solutionOf신규아이디추천 = (newId: string): string => {
  return newId
    .toLocaleLowerCase()
    .replace(/[^-_.a-z0-9]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/, "")
    .replace(/^(.)$/, "$1$1$1")
    .replace(/^(.)(.)$/, "$1$2$2");
};

describe("신규아이디추천", () => {
  test("case1", () => {
    expect(solutionOf신규아이디추천("z-+.^.")).toBe("z--");
  });
  test("case2", () => {
    expect(solutionOf신규아이디추천("=.=")).toBe("aaa");
  });
  test("case3", () => {
    expect(solutionOf신규아이디추천("123_.def")).toBe("123_.def");
  });
  test("case4", () => {
    expect(solutionOf신규아이디추천("abcdefghijklmn.p")).toBe("abcdefghijklmn");
  });
});
