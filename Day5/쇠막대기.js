//문자열을 인덱싱으로 탐색한다
//if 닫는 괄호일 때 : 일단 pop()
//그리고 나서  if(s[i-1] === '('))일 경우 stack.length를 더하고 아닐 경우 answer에 1씩 더하는
//else는 여는 괄호 : stack.push(s[i])

function solution(s) {
  let stack = [];
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      stack.pop();
      if (s[i - 1] === "(") {
        answer += stack.length;
      } else answer++;
    } else {
      stack.push(s[i]);
    }
  }
  return answer;
}

console.log(solution("((((()))))"));
