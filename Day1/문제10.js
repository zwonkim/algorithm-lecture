function solution(s) {
  let answer = "";
  const toNum = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  for (key in toNum) {
    let regExpAll = new RegExp(key, "g");
    s.replace(regExpAll, toNum[key]);
  }
  answer = s;
  answer = Number(answer);
  return answer;
}

console.log(solution("zerofivesevenzero"));
