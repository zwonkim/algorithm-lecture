function solution(s) {
  let cnt = {};
  let odd = 0;
  let answer;

  for (let x of s) {
    cnt[x] = (cnt[x] || 0) + 1;
  }
  console.log(cnt);
  let values = Object.values(cnt);
  for (let x of values) {
    if (values % 2 === 1) odd++;
  }
  return odd <= 1 ? (answer = s.length) : (answer = s.length - odd + 1);
}

console.log(solution("abcbbbccaa"));

//answer = s.length - odd + 1 인 이유
//예를 들어 aabbcd의 팰린드롬이 있을 경우 odd는 2이다.
//이 때 전체 길이에서 odd를 모두 빼면 결국 abba가 되기 때문에 s.length는 4가 되는데
//이 경우 외에도 ab_ba의 경우도 가능하다. 저 빈자리 홀수개의 문자를 아무거나 넣어도 팰린드룸이 되기 때문
//따라서 odd가 2이상일 때는 길이에서 홀수개를 빼고 +1을 해줘야 한다.
