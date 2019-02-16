function solution(n) {
    let answer = 0;
    
    let arr = Array.from({length: n}, (v, k) => k+1);
    console.log(arr);
    arr.shift();
    for(let i = 2; i <= n ; i++){
        arr = arr.filter( v => v == i || v > i*i || v % i != 0)
    }
    console.log(arr);
}

solution(10);
//const arr = [1,2,3,4,5];
//arr.splice(2,2);
//console.log(arr);