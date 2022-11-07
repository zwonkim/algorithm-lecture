function solution(nums) {
  let map = new Map();
  for (let x of nums) {
    map.set(x, (map.get(x) || 0) + 1);
  }
  let maxN = 0;
  for (let [key, val] of map) {
    if (val === 1) {
      if (key > maxN) {
        maxN = key;
      }
    }
  }
  return maxN === 0 ? -1 : maxN;
}

console.log(solution([1, 1, 2, 2, 3, 4, 5, 7, 7]));

function solution(nums) {
  let ch = Array(1001).fill(0);
  for (let x of nums) {
    ch[x]++;
  }
  // 최대값 1000부터 뒤로 돌고 있는 것
  for (let i = 1000; i >= 0; i--) {
    if (ch[i] === 1) return i;
  }
  return -1;
}

console.log(solution([1, 1, 2, 2, 3, 4, 5, 7, 7]));

//나혼자 복습
function solution(nums) {
  let sH = new Map();
  let answer = -1;

  for (let x of nums) {
    sH.set(x, (sH.get(x) || 0) + 1);
    //Map { 1 => 2, 2 => 2, 3 => 1, 4 => 1, 5 => 1, 7 => 1 }
  }
  let maxN = 0;
  for (let [key, val] of sH) {
    if (val === 1) {
      if (key > maxN) {
        maxN = key;
        console.log(maxN);
      }
    }
  }
  return maxN === 0 ? -1 : maxN;
}

console.log(solution([1, 1, 2, 2, 3, 4, 5, 7, 7]));
