//array methods 

//1  forEach 

//  let arr = [1,2,3,4,5];

// // let print = function(el){
// //     console.log(el);
// // };
// // arr.forEach(print);

// //or

// // arr.forEach(function(el){
// //     console.log(el);
// // })

// //in arrow function

// arr.forEach((el) => {
//     console.log(el);
// })



//in object form 

// let arr =[{
//     name : "akshay",
//     marks : 95
// },{
//     name : "ammi",
//     marks : 93
// },{
//     name : "naruto",
//     marks : 94
// }];

// arr.forEach((el) => {
//     console.log(el.marks);
// })


//2  map

// let num = [1,2,3,4];

// let double = num.map((el)=>{
//     return el*2;
// });


// let students =[{
//     name : "akshay",
//     marks : 95
// },{
//     name : "ammi",
//     marks : 93
// },{
//     name : "naruto",
//     marks : 94
// }];

// let gpa = students.map((el)=>{
//     return el.marks/10;
// })



//3 filter 

// let nums = [ 1,2,3,4,5,6,7,8,9,10];
// let ans = nums.filter((el)=>{
//     return el%2!=0;
// });


//4  every

// let nums = [ 1,2,3,4,5,6,7,8,9,10];
// nums.every((el)=>{
//    console.log( el%2==0);
// });



// reduce 

// let nums = [ 1,2,3,4];
// let finalVal = nums.reduce((res,el)=> {
//     console.log(res);
//     return res + el;
// });
//     console.log( finalVal);


//finding maximum number by reduce array method

// let nums = [ 1,2,3,334,5,36,7,8,9,10];


//using for loop 

// let max = 0;
// for (let i=0; i< nums.length; i++){
//     if(max < nums[i]){
//         max=nums[i];
//     }
// }
// console.log(max);

//using reduce method 
// let max = nums.reduce((max,el) =>{
//     if(max < el){
//         return el;

//     }else{
//         return max;
//     }
// });
// console.log(max);




//practice question 

//check if all numbers in our array are multiple of 10 or not 


// let nums = [10,20,30,40,50];
// let ans = nums.every((el)=> el%10==0);
// console.log(ans);



//practice question 

//create a function to find the min number in an array 

// let nums = [ 1,2,3,334,5,36,7,8,9,10];

// let min = nums.reduce((min,el)=>{
//     if (min < el ){
//         return min;
//     }else {
//         return el;
//     }

// })
// console.log(min);



//or in function form 

// function getMin(nums){
//     let min = nums.reduce((min,el)=>{
//         if (min < el ){
//             return min;
//         }else {
//             return el;
//         }
    
//     });
//     return min;
// }
// console.log(getMin(nums));


//default parameters 

// function sum(a,b=3){
//     return a+b;
// }
// console.log(sum(2));


//spread with object literals

// let data ={
//     email:"akshay@gmail.com",
//     password :"jkdhjsd",
// };
// let dataCopy={...data,id:123,country:"india"};
// console.log(dataCopy);


//array and it will spread in object key:value pair insted of key when it spread it stores index value and array value

// let arr = [ 1,2,3,334,5,36,7,8,9,10];
// let obj1 ={
//     ...arr
// }
// console.log(obj1)


// let obj2 = {..."hello"};
// console.log(obj2);




//rest 


function sum(...args) {//arguments 
    for(let i=0; i<args.length; i++){
        console.log("you gave us",args[i])
    }
    
}



function min(){
    console.log(arguments)  //it will run    but when we push it will thrown an error when it call arguments.push  -->  beacuse of it is an array method 
}



//all arguments summ using reduce method in rest

// function sum(...args) {
//     return args.reduce((sum,el)=> sum + el);
// }


// function min(...args) {
//     return args.reduce((min,el)=> {
//         if (min > el){
//             return el;
//         }else{
//             return min;
//         }
//     });
    
// }



//destructuring

// let names = ["akshay","milind" ,"vedant","atharva"];
// let [winner,runnerup,...others] = names ;


//destructuring for objects

const student ={
    name :"Akshay",
    age:14,
    class:9,
    subject:["hindi","english","marathi","math","science"],
    username:"Akshay@123",
    password:"abcd"
};


// let username=student.username;
// let password=student.password;

const {username:user,password:secret}=student;
