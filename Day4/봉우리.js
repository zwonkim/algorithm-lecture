/* function solution(board) {
  for (let i = 0; i < board.length; i++) {
    board[i].unshift(0);
    board[i].push(0);
  }
  let zero = Array(board.length + 2).fill(0);
  board.unshift(zero);
  board.push(zero);

  let cnt = 0;
  for (let i = 1; i < board.length - 1; i++) {
    for (let j = 1; j < board.length - 1; j++) {
      if (
        board[i][j] > board[i + 1][j] &&
        board[i][j] > board[i - 1][j] &&
        board[i][j] > board[i][j + 1] &&
        board[i][j] > board[i][j - 1]
      ) {
        cnt += 1;
      }
    }
  }
  return cnt;
}

console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
); */

function solution(board) {
  let answer = 0;
  let n = board.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = true;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          board[nx][nx] >= board[i][j]
        ) {
          flag = false;
          break;
        }
      }
      if (flag) answer += 1;
    }
  }
  return answer;
}

console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
