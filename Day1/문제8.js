function solution(s) {
  let S = s.split("").map((e) => e.toLowerCase());
  let SS = S.toString().replaceAll(",", "");
  console.log(SS);
  let X = S.reverse().toString().replaceAll(",", "");
  console.log(X);
  if (SS === X) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] != s[s.length - 1 - i]) return "NO";
  }
  return answer;
}

console.log(solution("gooG"));

function solution(s) {
  let answer = "";
  let sUp = s.toUpperCase();
  const x = sUp.split("").reverse().join("");
  if (sUp === x) {
    answer = "yes";
  } else {
    answer = "no";
  }
  return answer;
}

console.log(solution("moom"));
