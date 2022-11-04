function solution(s) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i]; //indexOf는 무조건 첫번째만 반환하니까
  }
  return answer;
}

console.log(solution("ksekkset"));

//나혼자복습
/* function solution(s) {
  let answer = "";
  for (i = 0; i < s.length; i++) {
    if (s.indexOf(s[i] === i)) {
      answer += s[i];
    }
  }
  return answer;
}

console.log(solution("ksekkset")); */
