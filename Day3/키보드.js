function solution(s, k) {
  let set = new Set(s.toLowerCase());
  console.log(set);
  for (let x of s) {
    if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
      return set.size + 1 === k;
    }
    return set.size === k;
  }
}

console.log(solution("Teacher", 6));

function solution(s, k) {
  let sH = new Map();
  for (let x of s) {
    if (x === x.toUpperCase()) {
      sH.set("shift", 1);
      x = x.toLowerCase();
    }
    sH.set(x, 1);
  }
  return sH.size <= k;
}
console.log(solution("TteacHer", 7));

function solution(s, k) {
  let ch = Array(27).fill(0);
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 65 && num <= 90) {
      ch[26] = 1;
      ch[num - 65] = 1;
    } else ch[num - 97] = 1;
  }
  let cnt = 0;
  for (let i = 0; i <= 26; i++) {
    if (ch[i] === 1) cnt++;
  }
  return cnt <= k;
}
console.log(solution("TteacHer", 7));
