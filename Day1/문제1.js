function solution(s, c) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) answer++;
    //if(s[i].includes(c)) answer++;
  }
  return answer;
}
console.log(solution("COMPUTERPROGRAMMING", "R"));

//나혼자 복습
function solution(s, c) {
  let answer = 0; //정답은 0개부터 시작할거니까 0으로 초기화
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) answer++; //문자열 s의 i번째 문자가 c와 같을 경우 answer이 하나씩 증가하는 것
  }
  return answer;
}

console.log(solution("“IT IS TIME TO GO", "E"));
