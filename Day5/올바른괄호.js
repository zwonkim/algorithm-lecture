function solution(s) {
  let answer = "YES";
  let stack = [];
  for (let x of s) {
    if (x == "(") stack.push(x);
    else {
      //stack에 아무것도 없는데 )가 나올 경우 상쇄될 짝이 없기 때문에 NO 반환
      if (stack.length == 0) return "NO";
      stack.pop();
    }
  }
  //괄호들이 모두 짝을 찾았다면 stack의 길이는 0이어야 하기 때문에 NO 반환
  if (stack.length > 0) return "NO";
  return answer;
}
console.log(solution("(()(()))(()"));
console.log(solution("(()(()))"));
