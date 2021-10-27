// https://programmers.co.kr/learn/courses/30/lessons/84512

function nextWord(word: string): string {
  let currentWord = word;
  if (currentWord.length < 5) {
    return currentWord + "A";
  } else {
    currentWord = currentWord.replace(/U+$/, "");
    return (
      currentWord.slice(0, currentWord.length - 1) +
      nextCharacter(currentWord[currentWord.length - 1])
    );
  }
}

function nextCharacter(char: string): "E" | "I" | "O" | "U" {
  switch (char) {
    case "A":
      return "E";
    case "E":
      return "I";
    case "I":
      return "O";
    default:
      return "U";
  }
}

function solutionOf모음사전(originalWord: string): number {
  // A, AA, AAA, AAAA, AAAAA,
  // AAAAE, AAAAI, AAAAO, AAAAU,
  // AAAE, AAAEA, AAAEE, AAAEO, AAAEU
  // ...
  // AAAUU
  // AAE
  let word = "";
  let count = 0;
  while (true) {
    count += 1;
    word = nextWord(word);
    if (word === originalWord) return count;
    if (count > 10000) return -1;
  }
}

// describe("nextWord", () => {
//   test("case 1", () => {
//     expect(nextWord("A")).toBe("AA");
//   });
//   test("case 2", () => {
//     expect(nextWord("AAAAA")).toBe("AAAAE");
//   });
//   test("case 3", () => {
//     expect(nextWord("AAAAE")).toBe("AAAAI");
//   });
//   test("case 4", () => {
//     expect(nextWord("AAAAU")).toBe("AAAE");
//   });
//   test("case 5", () => {
//     expect(nextWord("E")).toBe("EA");
//   test("case 6", () => {
//     expect(nextWord("AUUUU")).toBe("E");
//   });
// });

describe("solutionOf모음사전", () => {
  test("case 1", () => {
    expect(solutionOf모음사전("AAAAE")).toBe(6);
  }, 1);
  test("case 2", () => {
    expect(solutionOf모음사전("AAAE")).toBe(10);
  });
  test("case 3", () => {
    expect(solutionOf모음사전("I")).toBe(1563);
  });
  test("case 4", () => {
    expect(solutionOf모음사전("EIO")).toBe(1189);
  });
});
