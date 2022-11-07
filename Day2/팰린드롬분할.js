// 홀수인 문자열을 카운트한 odd가 k 개 이하일 때만 false 가 나오도록
// 회문이 k개 되려면 홀수 문자가 최대 k개까지
function solution(s, k) {
  let cnt = {};
  let odd = 0;

  for (let x of s) {
    cnt[x] = (cnt[x] || 0) + 1;
  }

  let keys = Object.keys(cnt);
  for (let x of keys) {
    console.log(x); // a,b,c
    console.log(cnt[x]); // 333
    if (cnt[x] % 2 == 1) odd++;
  }
  return odd <= k;
}
console.log(solution("abcabcabc", 2));

//나혼자 복습

function solution(s, k) {
  let cnt = {};
  let odd = 0;

  for (let x of s) {
    cnt[x] = (cnt[x] || 0) + 1;
    console.log(cnt);
  }

  let values = Object.values(cnt);
  for (let x of values) {
    console.log(x);
    if (x % 2 == 1) odd++;
  }
  return odd <= k;
}

console.log(solution("abcabcabc", 2));
