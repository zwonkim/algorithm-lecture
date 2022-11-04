function solution(s) {
  let x = s.split("").reverse().toString().replaceAll(",", "");
  if (s === x) console.log("YES");
  else {
    s = s.slice(0, -1);
    if (s === x) console.log("YES");
    else console.log("NO");
  }
}

solution("abcbdcba");

function isPal(s) {}

//완전 틀려버림 고치세요
