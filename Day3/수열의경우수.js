function solution(nums) {
  let peaks = [];
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
      peaks.push(i);
    }
  }
  console.log(peaks);
  for (let p of peaks) {
    let left = p;
    let right = p;
    //왼쪽에 몇 개의 숫자가 들어가고 오른쪽의 몇 개의 숫자가 들어가는지 세서
    //두 수를 곱하면 해당 수열로 만들 수 있는 경우의 수를 구할 수 있다.
    let leftCnt = 0;
    let rightCnt = 0;
    while (nums[left - 1] < nums[left]) {
      left--;
      leftCnt++;
    }
    while (nums[right] > nums[right + 1]) {
      right++;
      rightCnt++;
    }
    answer += leftCnt * rightCnt;
    console.log(answer);
  }
  return answer;
}

console.log(solution([1, 3, 2, 5, 7, 4, 2, 5, 1]));
