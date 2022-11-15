/* 
1. 봉우리를 찾아라
1-1. 봉우리는 왼쪽과 오른쪽보다는 내가 큰 거
1-2. peak라는 배열에 인덱스 번호 push
2. 각 봉우리 지점에서 왼쪽, 오른쪽으로 가는 감소수열이 몇 개인지
*/
function solution(nums) {
  let peaks = []; //봉우리의 길이
  let answer = [];

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
      peaks.push(i);
    }
  }
  console.log(peaks);
  for (let p of peaks) {
    let length = 1; //봉우리값은 무조간 하나를 갖기 때문에
    //left와 right의 기준을 p로 놓고 한 칸씩 줄여나가는 것
    let left = p;
    let right = p;
    while (nums[left - 1] < nums[left]) {
      length++;
      left--;
    }
    while (nums[right] > nums[right + 1]) {
      length++;
      right++;
    }
    answer.push(length);
  }
  return Math.max(...answer);
}

console.log(solution([1, 3, 2, 5, 7, 4, 2, 5, 1]));
