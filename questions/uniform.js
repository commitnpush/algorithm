function solution(n, lost, reserve) {
  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (lost.indexOf(i + 1) === -1) {
      //자신이 체육복을 가져온경우
      answer++;
    } else if (lost.indexOf(i + 1) !== -1 && reserve.indexOf(i + 1) !== -1) {
      //자신의 체육복을 도둑맞았지만 여벌을 가져온 경우
      answer++;
      reserve.splice(reserve.indexOf(i + 1), 1);
    } else if (reserve.indexOf(i) !== -1 && lost.indexOf(i) === -1) {
      //앞사람이 체육복을 여분으로 가져왔고 잃어버리지 않았을 경우
      answer++;
    } else if (reserve.indexOf(i + 2) !== -1 && lost.indexOf(i + 2) === -1) {
      //뒷사람
      answer++;
      reserve.splice(reserve.indexOf(i + 2, 1));
    }
  }
  return answer;
}

solution(5, [1, 2, 3, 4], [1, 3, 5]);
