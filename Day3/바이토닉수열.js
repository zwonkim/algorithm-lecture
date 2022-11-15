function solution(nums) {
  let i = 0;
  const end = nums.length - 1;
  while (nums[i] < nums[i + 1]) i++;
  //만약 nums[0]일 경우 while문이 전혀 돌지도 않은 것이기 때문에 바이토닉 수열이 아님
  //만약 nums[end]면 처음부터 끝까지 증가하는 수열이기 때문에 바이토닉이 수열이 아님
  if (i === 0 || i === end) {
    return "NO"; //이건 바이토닉 수열이 아니라 처음부터 끝까지 증가만 하는 수열이기 때문
  }
  while (nums[i] > nums[i + 1]) i++;
  //숫자가 작아지면서 수열이 끝나야 하는데 만약 마지막에 도달하지 못 하고 끝났다면 이건 바이토닉 수열이 아님
  if (i !== end) {
    return "NO";
  } else return "YES";
}
console.log(solution([1, 2, 3, 4, 5, 3, 1]));
