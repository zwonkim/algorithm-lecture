//첫번째 방법
function solution(nums) {
  let answer = 1;
  for (let i = 1; i <= nums.length - 1; i++) {
    //신호변수
    let flag = true;
    for (let j = 0; j < i; i++) {
      if (nums[j] >= nums[i]) {
        flag = false;
        break;
      }
    }
    if (flag == true) {
      answer += 1;
    }
  }
  return answer;
}
console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));

//두번째 방법
function solution(nums) {
  let answer = 1;
  let maxN = nums[0]; //첫번째 사람을 넣어요
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] > maxN) {
      answer += 1;
      maxN = nums[i];
    }
  }
  return answer;
}
console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));

function solution(nums) {
  let answer = 1;
  let maxN = nums[0]; //가장 큰 학생의 키
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] > maxN) {
      maxN = nums[i];
      answer += 1;
    }
  }
  return answer;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
