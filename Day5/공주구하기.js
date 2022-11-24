// 배열을 순서대로 초기화 해놓고
//for문이 k-1번을 돌면서 shift해서 꺼내고 뒤에다 push
//for문이 끝나면 그냥 shift
//큐의 length가 1일때까지 while문
function solution(n, k) {
  //queue를 만드는 작업
  let queue = [];
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }
  console.log(queue);
  //queue.length는 0일때까지 while문이 도는 것
  while (queue.length) {
    for (let i = 1; i < k; i++) {
      //1,2를 외치고 뒤로 넘어가는 과정
      queue.push(queue.shift());
    }
    queue.shift();
    //한 명 남았을 때 걔가 정답이 되는 것
    if (queue.length === 1) return queue[0];
  }
}
console.log(solution(10, 4));
