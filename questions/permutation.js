let answer = [];
function solution(numbers) {
  numbers = numbers.split("");
  for (let k = 1; k <= numbers.length; k++) {
    permutation(numbers, 0, k);
  }
  console.log(answer);
  return answer.reduce((acc, v) => {
    console.log(acc);
    if (acc.indexOf(v) == -1) {
      acc.push(v);
    }
    return acc;
  }, []).length;
}

function permutation(arr, n, k) {
  if (n === k) {
    let number = makeNumber(arr, k);
    if (isPrimeNumber(number)) {
      answer.push(number);
    }
    return;
  }

  for (let i = n; i < arr.length; i++) {
    swap(arr, i, n);
    permutation(arr, n + 1, k);
    swap(arr, i, n);
  }
}

function swap(arr, a, b) {
  if (a === b) return;
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

function isPrimeNumber(n) {
  if (n == 0 || n == 1) return false;
  let sqrt = Math.sqrt(n);
  for (let i = 2; i <= sqrt; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
function makeNumber(arr, k) {
  let number = 0;
  for (let i = 0; i < k; i++) {
    number += arr[i] * Math.pow(10, i);
  }
  return number;
}
console.log(solution("011"));
