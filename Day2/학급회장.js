function solution(s) {
  let answer;
  let sH = new Map();
  for (let x of s) {
    sH.set(x, (sH.get(x) || 0) + 1); // { 'b' => 4, 'a' => 2, 'c' => 1 }
  }
  let max = Number.MIN_SAFE_INTEGER; //0으로 해도 상관없음
  for (let [key, val] of sH) {
    // [b, 4] [a, 2] [c, 1]
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}
console.log(solution("bbbbaac"));

//나혼자 복습
function solution(s) {
  let answer;
  let sH = new Map();
  for (let x of s) {
    sH.set(x, (sH.get(x) || 0) + 1);
  }

  let maxN = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > maxN) {
      maxN = val;
      answer = key;
    }
  }
  return answer;
}

console.log(solution("BACBACCACCBDEDE"));
