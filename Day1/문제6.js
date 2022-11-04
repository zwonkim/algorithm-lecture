function solution(s) {
  let answer = "";
  for (let i = 0; i < s[0].length; i++) {
    let set = new Set();
    for (let x of s) {
      set.add(x[i]);
    }
    if (set.size === 1) {
      answer += s[0][i];
    } else break;
  }
  return answer;
}

console.log(solution(["long", "longtime", "longest"]));

//나혼자복습
function solution(s) {
  let answer = "";
  for (let i = 0; i < s[0].length; i++) {
    let set = new Set();
    for (let x of s) {
      set.add(x[i]);
    }
    if (set.size === 1) {
      answer += s[0][i];
    } else break;
  }
  return answer;
}

console.log(solution(["long", "longtime", "longest"]));
