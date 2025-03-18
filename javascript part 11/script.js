//  visualizing the call stack 

function one(){
    return 1;
}
function two(){
    return one() + one();
}
function three(){
   let ans = two() + one();
    console.log(ans);
    
}
three();


//js is an single threaded language that can be non-blocking
//single threaded means that it has only one call stack

setTimeout(() => {
    console.log('hello world');
},200)
console.log('I am first');