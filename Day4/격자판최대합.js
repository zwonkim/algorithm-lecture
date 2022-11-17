function solution(board) {
  let answer = 0;
  let n = board.length;
  for (let i = 0; i < n; i++) {
    let sum1 = 0;
    let sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += board[i][j];
      sum2 += board[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = 0;
  sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += board[i][i];
    sum2 += board[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

console.log(
  solution([
    [57, 65, 22, 33, 11, 11],
    [15, 66, 77, 34, 21, 13],
    [55, 12, 11, 55, 11, 55],
    [54, 33, 66, 88, 11, 22],
    [88, 99, 12, 16, 18, 33],
    [11, 100, 22, 68, 88, 17],
  ])
);

function solution(board) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = board.length;
  for (let i = 0; i < n; i++) {
    let sum1 = (sum2 = 0);
    for (let j = 0; j < n; j++) {
      sum1 += board[i][j];
      sum2 += board[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += board[i][i];
    sum2 += board[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}
console.log(
  solution([
    [57, 65, 22, 33, 11, 11],
    [15, 66, 77, 34, 21, 13],
    [55, 12, 11, 55, 11, 55],
    [54, 33, 66, 88, 11, 22],
    [88, 99, 12, 16, 18, 33],
    [11, 100, 22, 68, 88, 17],
  ])
);
