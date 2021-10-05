function solution(brown, red) {
  for (let i = (brown - 2) / 2; i >= 3; i--) {
    let x = i - 2;
    let y = (brown - i * 2) / 2;
    if (x * y === red) return [x + 2, y + 2];
  }
}

console.log(solution(24, 24));
