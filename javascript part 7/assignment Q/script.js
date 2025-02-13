//Q1
// write an arrow function named arrayAverage that takes an array of numbers as a parameter and returns the average of the numbers.

// const  arrayAverage = (arr) => {
//     let total = 0;
//     for (let numbers of arr){
//         total += numbers;
//     }
//     return total / arr.length;

// };
// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arrayAverage(arr));//5.5




//Q2
//write an arrow function named isEven() that takes a single number as arugment and returns if it is even or not.

// let num = 5;
// const isEven = (num) => {
//     return num % 2 === 0;
// };
// console.log(isEven(num));//false



//Q3
// const object ={
//     message : "Hello",
//     logMessage(){
//         console.log(this.message);

//     }
// };
// setTimeout(object.logMessage, 1000);//undefined


//Q4
let length = 4;
function callback(){
    console.log(this.length);//globle scope 
}
const object = {
    length: 5,
    method(callback){
        callback();
    },
};
object.method(callback, 1,2);