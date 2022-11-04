function solution(s) {
  let answer = "";
  let maxL = 0;
  for (let x of s) {
    if (x.length > maxL) {
      maxL = x.length; //최댓값 구하는 방법
      answer = x;
    }
  }
  return answer;
}

console.log(solution(["teacher", "time", "student", "beautiful", "good"]));

//두번째 경우 : 배열에 같은 길이의 단어가 두 개 있다
function solution(s) {
  let answer = "";
  let maxL = 0;
  for (let x of s) {
    if (x.length >= maxL) {
      maxL = x.length; //최댓값 구하는 방법
      answer = x; //itistimes와 beautiful은 값이 같아서 같거나 큰 경우로 두면 itistimes가 나옴
    }
  }
  return answer;
}

console.log(solution(["teacher", "itistimes", "student", "beautiful", "good"]));
//x.length >= maxL 일 경우 beautiful이 나오고, x.length > maxL 일 경우 itistimes

//나혼자복습
function solution(s) {
  let answer = "";
  let maxL = 0;
  for (let x of s) {
    if (x.length > maxL) {
      maxL = x.length;
      answer = x;
    }
  }
  return answer;
}

console.log(solution(["teacher", "time", "student", "beautiful", "good"]));
