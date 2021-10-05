function solution(jobs) {
  jobs.sort((a, b) => a[0] - b[0]);
  var answer = 0;
  var jobs_length = jobs.length;
  let start_time = 0;
  let time = 0;
  while (jobs.length != 0) {
    let entry = 0;
    for (let i in jobs) {
      //작업 선정
      if (jobs[i][0] <= time && jobs[i][1] < jobs[entry][1]) entry = i;
    }
    //실행할 job이 없으면 시간 증가
    if (jobs[entry][0] > time) {
      time = jobs[entry][0];
    }

    let job = jobs.splice(entry, 1)[0];
    //현재시간 증가
    time += job[1];

    //작업시간 + 대기시간(현재시간 - 진입시간)추가
    answer += time - job[0];
  }
  return Math.floor(answer / jobs_length);
}

console.log(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
  ])
);

console.log(
  solution([
    [0, 9],
    [0, 4],
    [0, 5],
    [0, 7],
    [0, 3],
  ])
);
