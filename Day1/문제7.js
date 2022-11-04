function solution(s) {
  s = s + " "; //제일 마지막 문자와 비교하는 게 공백이 되도록 공백 추가
  let answer = "";
  let cnt = 1;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      cnt += 1;
    } else {
      answer += s[i];
      if (cnt > 1) {
        answer += cnt.toString();
      }
      cnt = 1;
    }
  }
  return answer;
}

console.log(solution("KKHSSSSSSSE"));

//나혼자 복습
function solution(s) {
  s = s + " ";
  let answer = "";
  let cnt = 1;
  //공백으로 s의 문자열을 하나 추가했기 때문에 length - 1
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      cnt += 1;
    } else {
      answer += s[i];
      if (cnt > 1) {
        answer += cnt.toString(); //숫자기 때문에 문자열로 바꾸는 작업
      }
      cnt = 1;
    }
  }
  return answer;
}

console.log(solution("AAABCCCDD"));
