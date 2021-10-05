function solution(strings, n) {
  return strings.sort((a, b) => a.charAt(n) > b.charAt(n)).sort();
}
