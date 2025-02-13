// "this"  in javascript 

// const student = {
//     name: "Helsinki",
//     age: 24,
//     eng: 80,
//     math: 90,
//     bio: 70,
//     getavg(){
//         let avg = (this.eng + this.math + this.bio) / 3;
//         console.log(`The average of ${this.name} is ${avg}`);
//     }
// }


//try and catch in javascript

// console.log("This is tutorial 7");
// console.log("This is tutorial 7");
// console.log("This is tutorial 7");
// try{
//     console.log(a); //this will throw an error
// }
// catch(error){
//     console.log("this is an error");
//     console.log(error);//this will print the error
// }

// console.log("This is tutorial 7");
// console.log("This is tutorial 7");
// console.log("This is tutorial 7");
// console.log("This is tutorial 7");




//arrow function in javascript

// const sum = (a,b) => {
//     console.log(a+b);
// };
// sum(5,5);

// const cube =(n) => { //without () if there is only one parameter it will work

//     console.log(n*n*n);
// }
// cube(3);

// //power function 
// const power = (a,b) => {
//     console.log(a**b);
// }
// power(2,3);


// const hello = () => {
//     console.log("Hello World");
// }  //hello();


// //implicit return in arrow function
// const mul= (a,b) => a*b; //if there is only one line of code then we can remove the curly braces and return keyword




//set time out in javascript

// console.log("hii there!");
// setTimeout(() => {
//     console.log("apna college");
// }, 5000);
// console.log("welcome to");


//set interval in javascript
// let id = setInterval(() => {
//     console.log("This is setInterval 1");
// }, 2000);
// console.log(id);
// let id2 = setInterval(() => {
//     console.log("This is setInterval 2");
// }, 2000);
// console.log(id2);
// clearInterval(id2); //it will stop the interval with id2



//this with arrow function in javascript

// const student = {
//     name: "akshay",
//     marks: 94,
//     prop:this,//globle scope
//     getName: function(){
//         console.log(this.name);//this is calling the name of the object
//     },
//     getMarks: () => {
//         console.log(this); // this is parent scope --- window object
//         return this.marks;
//     },
//     getInfo1:function(){
//         setTimeout(() => {
//             console.log(this);//student object
//         }, 2000);
        
//     },
//     getInfo2:function(){
//         setTimeout(function(){
//             console.log(this);//window object
//         }, 2000);
        
//     },
// };
// student.getName(); //akshay





//practice question 1

//write an arrow function that returns the square of a number "n"

// const square = (n) => n*n;
//  console.log(square(5)); //25

//practice question 2
// wrire a function that prints "hello world" 5 times after 2 second each

let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("stopped");
}, 10000);