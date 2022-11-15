//0을 만나면 그대로 1을 만나면 score를 하나씩 증가시켜
function solution(nums) {
  let score = 0;
  let answer = 0;
  nums.forEach((num) => {
    if (num === 1) {
      score++;
      answer += score;
    } else {
      score = 0;
    }
  });
  return answer;
}
console.log(solution([1, 1, 1, 1, 1, 0, 1]));
