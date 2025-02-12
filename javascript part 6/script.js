// // function in js 

// function hello(){
//     console.log("Hello World");
// }
// hello();
// hello();

// function printName (){
//     console.log("My name is akshay");
// }
// printName();

// function print1to5(){
//     for (let i = 1; i <= 5; i++){
//         console.log(i);
//     }
// }
// print1to5();

// function isAdult(age){
//     if (age >= 18){
//         console.log("You are adult");
//     } else {
//         console.log("You are not adult");
//     }
// }
// isAdult(20);


// // practice que 
// // crete a function that prints a poem
// function printPoem(){
//     console.log("Roses are red");
//     console.log("Violets are blue");
//     console.log("Sugar is sweet");
//     console.log("And so are you");
// }
// printPoem();


// //practice que
// //create a function to roll a dice and always display the value of dice (1 to 6)/

// let randomNumber = Math.floor(Math.random() * 6) + 1;
// function rollDice(){
//     let randomNumber = Math.floor(Math.random() * 6) + 1;
//     console.log(randomNumber);
// }
// rollDice();






//function with arguments

// function printInfo(name, age) {
//     console.log(`${name }'s age is ${age}`);
// }
// printInfo("akshay" , 20);
// printInfo("ajinkya" ,17);

// function sum(a,b) {
//     console.log(a+b);
// }
// sum(2,4);

//practice que
// create a function that gives us the average of 3 numbers 

// function calcAvg (a,b,c){
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }
// calcAvg(2,2,2);


//practice que
//create a function that prints the multiplication table of a numbers

// function printTable(n){
//    for (let i = n; i <= n*10; i+=n){
//        console.log(i);
//    }
// }
// printTable(5);



// return statement in function

// function sum(a,b){
//     console.log("This is a sum function");
//     return a+b;
// }
// console.log(sum(2,3));  // 3 numbers sum   sum(sum(1,2),3);


// function isAdult(age){
//     if (age >= 18){
//         return "adult";
//     }else{
//         return "not adult";
//     }
//     console.log("bye bye");
// }
// console.log(isAdult(20));



//practice que
//create a function that returns the sum of numbers from 1 to n

// function getSum(n){
//     let sum = 0;
//     for (let i = 1; i <= n; i++){
//         sum += i; //  or sum = sum + i
//     }
//     return sum;
// }
// console.log(getSum(5)); // 1+2+3+4+5 = 15


//practice que
//create a function that returns the concatenation of all  strings in an array.

// let str = ["akshay", "ajinkya", "sanket", "sagar"];
// function concat(str) {
//     let result = "";
//     for(let i = 0; i < str.length; i++){
//         result += str[i];
//     }
//     return result;
// }
// console.log(concat(str));// Output: "akshayajinkyasanketsagar"


//scope of variable

// let sum = 54;  // global scope 
// function calSum(a,b){
//     let sum = a+b; // function scope
//     console.log(sum);
// }
// calSum(2,3);

// {
//     let a = 10; // block scope
//     console.log(a);
// }

// lexical scope 
// function outerFunc(){
//     let x = 10;
//     let y = 20;
//     function innerFunc(){
//         console.log(x);
       
//     }
//     innerFunc();
// }
// outerFunc();


//practice que
//what will be the output of this code

// let greet = "Hello"; //globle scope 
// function changeGreet(){
//     let greet = "namaste"; //function scope 
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);// lexical scope 
//     }
//     innerGreet();
// }
// console.log(greet);
// changeGreet();


// function expression 
//store a function in a variable

// const sum = function(a,b){
//     return a+b;
// }
// sum(2,3);


// let hello = function(){
//     console.log("Hello World");
// }


//higher order function
//takes one or more multiple functions as arguments


// function multipleGreet(func,n){ //higher order function
//     for (let i = 1; i < n; i++){
//         func();
//     }
// }
// let greet = function(){
//     console.log("Hello World");
// }
// multipleGreet(greet,5); // or multipleGreet(function(){console.log("Hello World")},5);



//returns a function
//odd and even number

// function oddOrEvenFactory(request){
//     if(request = "odd"){
//         return function(n){
//             console.log(!(n % 2 == 0));
//         }
//     }else if (request = "even"){
//         return function(n){
//             console.log(n % 2 == 0);
//         }
//     } else {
//         console.log("Invalid request");
//     }
// }
// let request = "odd";// or even


// methods 

const calculator ={
    num:55,
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    },
    mul : function(a,b){
        return a*b;
    },
    div : function(a,b){
        return a/b;
    }
};