function solution(priorities, location) {
  var answer = 0;
  while (true) {
    if (Math.max.apply(null, priorities) === priorities[0]) {
      priorities.shift();
      answer++;
      if (location === 0) return answer;
    } else {
      priorities.push(priorities.shift());
    }
    location = location === 0 ? priorities.length - 1 : location - 1;
    console.log(location);
  }
}

solution([2, 1, 3, 2], 1);
