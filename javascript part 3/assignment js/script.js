//Q1

// let arr =[7,9,0,-2];
// let n = 3;

// let ans = arr.slice(0,n);
// console.log(ans);


//Q2
// let arr =[7,9,0,-2];
// let n=3;
// let ans = arr.slice(length-n);
// console.log(ans);


//Q3
// let str = prompt("enter a string");
// if(str.length == 0) {
//     console.log("string is empty");
// }
// else{
//     console.log("string is  not empty"); 
// }

//Q4
// let str = "ApNaCoLlEgE";
// let idx = 0;
// if (str[idx] == str[idx].toLowerCase()) {
//     console.log("character is lower case ");
// } else{
//     console.log("character is  not lower case "); 
// }

//Q5
// let str = prompt("please enter a string ");
// console.log(`original string = ${str}`);
// console.log(`string without spaces  = ${str.trim()}`);





//Q6
let arr = ["hello",'a',23,64,99,-6];
let item = 'a';
if( arr.indexOf(item) != -1) {
    console.log("element exist in array");

}else {
    console.log("element doesn't exist in array");
}