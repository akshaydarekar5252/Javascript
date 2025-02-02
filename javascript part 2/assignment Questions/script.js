//1st questiion


// let num=30;
// if(num%10 ==0){
//     console.log("good");
// }else{
//     console.log("bad ");

// }


//2nd question

// let name = prompt("please enter your name ");
// let age = prompt("please enter your age ");
// alert(`${name} is ${age} yers old.`);



//3rd question 

// let months = 1;
// switch(months) {
//     case 1 : console.log("January,February , March");
//     break;
//     case 2 : console.log("April, May , June");
//     break;
//     case 3 : console.log("July , August , September ");
//     break;
//     case 4 : console.log("October, November , December ");
//     break;
//     default : console.log("not a month");
//     break;
// }



//4th question 
// let str = "Apples";
// if((str[0]=='a' || str[0]=='A') && (str.length >5)) {
//     console.log("Golden string ");

// }else{
//     console.log("not a golden string");
// }


//5th question 
// let a=2;
// let b=3;
// let c=4;
// if(a > b) {
//     if(a > c) {
//         console.log( a," is largest");
//     }else{
//         console.log( c," is largest");
//     }
// }else{
//     if(b > c) {
//         console.log( b," is largest");
//     } else {
//         console.log( c," is largest");
//     }
// }



//6th bonus question 
let num1 = 32;
let num2 = 47852;

if((num1 % 10) == (num2 % 10)) {
    console.log("numbers have the same last digit which is", num1 % 10);  
}else{
    console.log("numbers  don't thave the same last digit which is", num1 % 10);
}