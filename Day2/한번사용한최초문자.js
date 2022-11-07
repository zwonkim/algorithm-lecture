function solution(s) {
  let answer = -1;
  let map = new Map();
  for (let x of s) {
    map.set(x, (map.get(x) || 0) + 1);
  }
  for (let i in s) {
    if (map.get(s[i]) === 1) {
      return Number(i) + 1;
    }
  }
  return answer;
}

console.log(solution("statitsics"));

//나혼자복습
function solution(s) {
  let sH = new Map();
  for (let x of s) {
    sH.set(x, (sH.get(x) || 0) + 1);
  }

  for (let [key, val] of sH) {
    if (val === 1) {
      return s.indexOf(key) + 1;
    }
  }
  return -1;
}

console.log(solution("statitsics"));
