function solution(s) {
  let sH = new Map();
  for (x of s) {
    sH.set(x, (sH.get(x) || 0) + 1);
  }
  let answer = 0;
  let set = new Set();
  for ([key, val] of sH) {
    console.log(key, val);
    //여기부터가 이해가 안돼 - 이제 돼!
    console.log(set);
    /// while 문 안에 첫번째 문자열에 빈도수가 set 자료형에 있냐는 조건문 넣기
    while (set.has(val)) {
      val--;
      answer++;
    }
    if (val === 0) continue;
    set.add(val);
  }
  return answer;
}

console.log(solution("aebbbbc"));

function solution(s) {
  let cnt = {};
  for (let x of s) {
    cnt[x] = (cnt[x] || 0) + 1;
  }

  let set = new Set();
  let answer = 0;
  let values = Object.values(cnt);

  for (let x of values) {
    while (set.has(x)) {
      x--;
      answer++;
    }
    if (x === 0) continue;
    set.add(x);
  }
  return answer;
}

console.log(solution("aaabbbcc"));
