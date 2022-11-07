//펠린드롬은 홀수개인 문자가 0개 혹은 1개일 때는 회문이 만들어지지만 그 이상이면 안됨
//odd를 하나씩 늘리며 홀수개 문자가 몇 개인지 세는 것

//수업 내용
function solution(s) {
  let cnt = {};
  let odd = 0;
  for (let x of s) {
    cnt[x] = (cnt[x] || 0) + 1;
  }
  console.log(cnt);
  console.log(Object.keys(cnt));
  for (let x of Object.keys(cnt)) {
    if (cnt[x] % 2 == 1) odd++;
    console.log(cnt[x]);
  }
  return odd <= 1; // 여기 이게 불린타입인 것. 만약 odd가 1보다 작거나 같으면 false를 반환하라
}

console.log(solution("abcbbbe"));

//내가 만든 map 버전
function solution(s) {
  let sH = new Map();
  let odd = 0;

  for (let x of s) {
    sH.set(x, (sH.get(x) || 0) + 1);
  }
  console.log(sH);
  for (let [key, val] of sH) {
    console.log(val);
    if (val % 2 === 1) {
      odd++;
    }
  }
  return odd <= 1;
}

console.log(solution("abbac"));
