function solution(arr, divisor) {
  var answer = [];
  answer = arr.filter((v) => v % divisor == 0).sort((a, b) => a - b);
  return answer;
}

console.log(solution([2, 36, 1, 3], 1));
