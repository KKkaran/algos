//This question is asked by Amazon. Given a string representing 
//the sequence of moves a robot vacuum makes, return whether or not 
//it will return to its original position. The string will only 
//contain L, R, U, and D characters, representing left, right, up, and down respectively.

let command = 'URURD'
const movement = ()=>{
    let counterLateral = 0;
    let counterNorth = 0;
    for(let s in command){

        if(command[s] == 'R') counterLateral++
        else if(command[s] == 'L') counterLateral--
        else if(command[s] == 'U') counterNorth++
        else counterNorth--;
    }
    if(counterLateral == 0 & counterNorth == 0){
        return "Bot at the original Position";
    }

    return "Bot somewhere else";
}

console.log(movement())