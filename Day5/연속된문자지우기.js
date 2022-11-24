function solution(s) {
  let stack = [];
  for (let x of s) {
    //stack이 비어있지 않고 stack의 가장 상단이 x와 같을 경우 pop으로 날려라
    if (stack.length > 0 && stack[stack.length - 1] === x) stack.pop();
    else stack.push(x);
  }
  return stack.join("");
}

console.log(solution("bcaacccbaabccabbaa"));
