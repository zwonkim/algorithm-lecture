function solution(food) {
    let answer = [];
    
    food.map((num, index) => {
        if(num > 1) {
            let cnt = Math.floor(num / 2)
            for(let i = 0; i < cnt; i++) {
                answer.push(index)
            }
        }
    })
    
    return answer.join("") + '0' + answer.reverse().join('') ;
}