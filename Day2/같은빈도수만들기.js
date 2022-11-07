function solution(s) {
  let answer = [];
  let map = new Map();
  for (let x of s) {
    map.set(x, (map.get(x) || 0) + 1);
  }
  let max = Math.max(...map.values());
  for (let x of "abc") {
    answer.push(max - map.get(x));
  }
  return answer;
}

console.log(solution("aaabc"));

function solution(s) {
  let answer = [];
  let map = new Map();
  for (let x of s) {
    map.set(x, (map.get(x) || 0) + 1);
  }
  let max = Math.max(...map.values());
  for (let x of "abc") {
    let F = map.get(x) === undefined ? 0 : map.get(x);
    answer.push(max - F);
  }
  return answer;
}

console.log(solution("aaabc"));

//나혼자복습
function solution(s) {
  let sH = new Map();
  let answer = [];
  for (let x of s) {
    sH.set(x, (sH.get(x) || 0) + 1); //{ 'a' => 3, 'b' => 1, 'c' => 1 }
  }
  let maxN = Math.max(...sH.values());
  for (let x of "abc") {
    answer.push(maxN - sH.get(x));
  }
  return answer;
}

console.log(solution("aaabc"));
