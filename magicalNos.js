//Given an integer n, return whether or not it is a “magical” number. 
//A magical number is an integer such that when you repeatedly replace 
//the number with the sum of the squares of its digits its eventually becomes one.

const isMagicalNo = (num)=>{ //num is 572
    //get num's digits and sum them and if its > 9 call 
    //the method again passing sum as num
    let number = num + ""
    let total = 0;
    number.split("").forEach((i)=>{
        total += Math.pow(parseInt(i),2)
    })
    return (total > 9) ? isMagicalNo(total) : total;
}

console.log(isMagicalNo(222));
console.log("karan")