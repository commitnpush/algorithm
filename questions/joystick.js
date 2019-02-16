function solution(name) {
  let answer = 0;
  for(let i = 0; i < name.length; i++){
    if(i === 0){
      answer += upOrDown(name.charAt(i));
    }
    i++;
  }
}

function upOrDown(char){
   if(char < 'N') return char.charCodeAt(0) - 65;
   return 91 - char.charCodeAt(0);
}
console.log(upOrDown('O'));