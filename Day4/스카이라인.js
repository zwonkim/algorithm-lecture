function solution(board) {
  let xArr = [];
  let yArr = [];

  for (let i = 0; i < board.length; i++) {
    let x = 0;
    let y = 0;
    for (let j = 0; j < board.length; j++) {
      if (x < board[i][j]) x = board[i][j];
      if (y < board[j][i]) y = board[j][i];
    }
    xArr.push(x);
    yArr.push(y);
  }

  console.log(xArr);
  console.log(yArr);

  let num = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] < Math.min(xArr[i], yArr[j])) {
        num += Math.min(xArr[i], yArr[j]) - board[i][j];
      }
    }
  }
  return num;
}

console.log(
  solution([
    [2, 5, 7, 3],
    [6, 8, 9, 7],
    [3, 2, 4, 5],
    [7, 2, 5, 8],
  ])
);

//내가 푼  거
function solution(board) {
  let n = board.length;
  let xArr = [];
  let yArr = [];
  for (let i = 0; i < n; i++) {
    let x = 0;
    let y = 0;
    for (let j = 0; j < n; j++) {
      if (x < board[i][j]) {
        x = board[i][j];
      }
      if (y < board[j][i]) {
        y = board[j][i];
      }
    }
    xArr.push(x);
    yArr.push(y);
  }
  let num = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] < Math.min(xArr[i], yArr[j])) {
        num += Math.min(xArr[i], yArr[j]) - board[i][j];
      }
    }
  }
  return num;
}

console.log(
  solution([
    [2, 5, 7, 3],
    [6, 8, 9, 7],
    [3, 2, 4, 5],
    [7, 2, 5, 8],
  ])
);
