function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else if (x === x.toLowerCase()) answer += x.toUpperCase();
  }
  return answer;
}
console.log(solution("StuDY"));

//나혼자복습
function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      answer += s[i].toLowerCase();
    } else if (s[i] === s[i].toLowerCase()) {
      answer += s[i].toUpperCase();
    }
  }
  return answer;
}

console.log(solution("StuDY"));

//다시 한 번 풀어보기
function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else if (x === x.toLowerCase()) answer += x.toUpperCase();
  }
  return answer;
}

console.log(solution("TeachER"));
