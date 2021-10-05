// function solution(peoples, limit) {
//   peoples.sort((a,b) => a - b);
//   //console.log(people);
//   outer:for(let i = 0; i < peoples.length; i++){
//     if(peoples[i] * 2 > limit) break;
//     inner:for(let j = i+1; j < peoples.length; j++){
//       if(peoples[j] + peoples[i] > limit ){
//         if(i != j-1){
//           peoples[i] += peoples[j-1];
//           peoples.splice(j-1,1);
//         }
//         continue outer;
//       }
//     }
//     peoples.pop();
//   }
//   return peoples.length;
// }
//solution([70,50,50,80],100);

function solution(peoples, limit) {
  peoples.sort((a, b) => a - b);
  let count = 0;
  outer: while (peoples.length > 0) {
    let people = peoples.shift();
    for (let i = peoples.length - 1; i >= 0; i--) {
      if (people + peoples[i] <= limit) {
        count += peoples.length - i;
        peoples.splice(i);
        continue outer;
      }
    }
    return count + peoples.length + 1;
  }

  return count;
}
console.log(solution([70, 50, 80, 50, 30, 20], 100));
