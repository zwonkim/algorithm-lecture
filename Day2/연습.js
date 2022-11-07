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
  }
  return odd <= 1;
}

console.log(solution("abcbbbe"));
