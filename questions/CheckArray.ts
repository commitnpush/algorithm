function canFormArray(arr: number[], pieces: number[][]): boolean {
  for (const piece of pieces) {
    const diff = arr.indexOf(piece[0]);
    for (let i = 0; i < piece.length; i++) {
      if (piece[i] !== arr[diff + i]) {
        return false;
      }
    }
  }
  return true;
}

canFormArray(
  [91, 2, 4, 64, 5, 78, 12, 9],
  [
    [78, 12, 3],
    [4, 64, 5],
    [91, 2],
  ]
);
