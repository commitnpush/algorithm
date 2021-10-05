function solution(a, b) {
  var answer = "";

  var date = b;
  switch (a) {
    case 12:
      date += 30;
    case 11:
      date += 31;
    case 10:
      date += 30;
    case 9:
      date += 31;
    case 8:
      date += 31;
    case 7:
      date += 30;
    case 6:
      date += 31;
    case 5:
      date += 30;
    case 4:
      date += 31;
    case 3:
      date += 29;
    case 2:
      date += 31;
  }
  date %= 7;
  switch (date) {
    case 0:
      answer = "THU";
      break;
    case 1:
      answer = "FRI";
      break;
    case 2:
      answer = "SAT";
      break;
    case 3:
      answer = "SUN";
      break;
    case 4:
      answer = "MON";
      break;
    case 5:
      answer = "TUE";
      break;
    case 6:
      answer = "WED";
  }
  return answer;
}
var result = solution(1, 1);
console.log(result == "FRI");
