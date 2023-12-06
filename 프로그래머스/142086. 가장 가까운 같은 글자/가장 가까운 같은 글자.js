function solution(s) {
    let answer = [];
    let sArr = [];
    
    for(let i = 0; i < s.length; i++) {
        if(!sArr.includes(s[i])) {
            answer.push(-1)
            sArr.push(s[i])
        } else {
            answer.push(i - sArr.lastIndexOf(s[i]))
            sArr.push(s[i])
        }
    }
    
    return answer;
}