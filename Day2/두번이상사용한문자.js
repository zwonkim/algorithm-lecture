function solution(s) {
  let answer = -1;
  let map = new Map();
  for (let x of s) {
    map.set(x, (map.get(x) || 0) + 1);
    if (map.get(x) >= 2) return x;
  }
  return answer;
}

console.log(solution("abccbaacz"));

/*  function solution(input) {
  let map = {};
  let ans;

  for (x of input) {
    map[x] = (map[x] || 0) + 1;
    if (map[x] >= 2) return x;
  }
  return -1;
}

console.log(solution("aabb")); */

//나혼자 복습
function solution(s) {
  let answer = -1;
  let sH = new Map();
  for (let x of s) {
    sH.set(x, (sH.get(x) || 0) + 1); // { 'a' => 3, 'b' => 2, 'c' => 3, 'z' => 1 }
    if (sH.get(x) >= 2) return x;
  }
  return answer;
}

console.log(solution("abccbaacz"));
