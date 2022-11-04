function solution(s) {
  let answer = 0;
  for (let x of s) {
    //for of 반복문은 배열 안의 자료들을 하나씩 꺼내고 싶을 때 사용
    if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) answer++;
  }
  return answer;
}

console.log(solution("KoreaTimeGood"));

//두번째 방법 : 문자열에 띄어쓰기가 있을 경우 고려
function solution(s) {
  let answer = 0;
  s = s.split(" ").join(""); //공백 제거 후 연결
  for (let x of s) {
    if (x === x.toUpperCase()) answer++; //x가 대문자일 때만 참이됨
  }
  return answer;
}

console.log(solution("KoreaTimeGood"));

//나혼자 복습
function solution(s) {
  s.split(" ").join();
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90) answer++;
  }
  return answer;
}

console.log(solution("IT IS TIME TO GO"));
