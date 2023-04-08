// let x = 20;
// const privateCounter = (function(){
//     let y = 25;
//     console.log(`Initial x : ${x}`)
//     console.log(`Initial y : ${y}`)
//     return function(){
//         x+=5;
//         y+=5;
//         console.log(`x : ${x}`)
//         console.log(`y : ${y}`)
        
//     }
// })()

// //let g = privateCounter()


// privateCounter()
// privateCounter()



//a function increases the counter by 1;

const increment = (()=>{
    let x = 0;
    
    return ()=>console.log(++x);
})();


increment();
increment();
increment();
increment();
increment();





















