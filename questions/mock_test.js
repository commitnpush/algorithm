function solution(answers) {
  const answer = [];
  const students = new Array(3).fill(0);
  for (var i = 0; i < answers.length; i++) {
    //1번학생
    if (i % 5 == answers[i] - 1) students[0]++;

    //2번학생
    if (i % 2 == 0 && answers[i] == 2) students[1]++;
    else if (i % 8 == 1 && answers[i] == 1) students[1]++;
    else if (i % 8 == 3 && answers[i] == 3) students[1]++;
    else if (i % 8 == 5 && answers[i] == 4) students[1]++;
    else if (i % 8 == 7 && answers[i] == 5) students[1]++;

    //3번학생
    if (Math.floor(i / 2) % 5 == 0 && answers[i] == 3) students[2]++;
    else if (Math.floor(i / 2) % 5 == 1 && answers[i] == 1) students[2]++;
    else if (Math.floor(i / 2) % 5 == 2 && answers[i] == 2) students[2]++;
    else if (Math.floor(i / 2) % 5 == 3 && answers[i] == 4) students[2]++;
    else if (Math.floor(i / 2) % 5 == 4 && answers[i] == 5) students[2]++;
  }
  const max = students.reduce((a, b) => (a > b ? a : b));
  for (let i = 0; i < students.length; i++) {
    if (students[i] === max) {
      answer.push(i + 1);
    }
  }
  console.log(students);
  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
