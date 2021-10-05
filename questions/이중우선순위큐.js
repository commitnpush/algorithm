function solution(operations) {
  var answer = [];
  const queue = [];
  for (let op of operations) {
    switch (op.split(" ")[0]) {
      case "I":
        queue.push(Number(op.split(" ")[1]));
        break;
      case "D":
        if (queue.length === 0) continue;
        if (op.split(" ")[1] === "1") {
          for (let i = 0; i < queue.length; i++) {
            if (queue[i] === Math.max.apply(null, queue)) {
              queue.splice(i, 1);
              break;
            }
          }
        } else {
          for (let i = 0; i < queue.length; i++) {
            if (queue[i] === Math.min.apply(null, queue)) {
              queue.splice(i, 1);
              break;
            }
          }
        }
    }
  }
  return answer;
}
