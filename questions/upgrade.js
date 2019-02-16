function solution(progresses, speeds) {
  var answer = [];
  while(progresses.length != 0){
      progresses = progresses.map((v,i) => v + speeds[i]);
      let count = 0;
      let length = progresses.length;
      for(let i = 0; i < length; i++){
          if(progresses[0] >= 100){
              speeds.shift();
              progresses.shift();
              count++;
          }else{
              break;
          }
      }
      if(count > 0) answer.push(count);
      count = 0;
  }
  return answer;
}

console.log(solution([40, 93, 30, 55, 60, 65], [60, 1, 30, 5 , 10, 7]));
