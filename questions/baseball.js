function solution(baseball){
  let answer = 0;
  let i = 328;
  for(let i = 123; i < 987; i++){
    if(i.toString().indexOf('0') !== -1){
      continue;
    }
    if(isDuplicated(i)){
      continue;
    }
    if(isPossible(i, baseball)) answer++;
  }
  return answer;
}

let result = solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]);
console.log(result);

function isDuplicated(i){
  let str = i.toString();
  const set = new Set();
  for(let j = 0; j < str.length; j++){
    set.add(str.charAt(j));
  }
  return set.size !== str.length;
}

function isPossible(n, games){
  let check = true;
  games.forEach( v => {
    let result = game(n, v[0]);
    if(result[0] != v[1] || result[1] != v[2]) check = false;
  });
  return check;
}

function game(n, target){
  n = n.toString();
  target = target.toString();
  let strike=0; 
  let ball = 0;
  for(let i = 0; i < 3; i++){
    for(let j = 0; j< 3; j++){
      if(n.charAt(i) === target.charAt(j)){
        i === j ? strike++ : ball++;
      }
    }
  }
  return [strike, ball];
}