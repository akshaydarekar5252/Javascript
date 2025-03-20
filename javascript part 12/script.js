//async function 

//  async function greet(){
//     // throw "Something went wrong"    
//     return "Hello World ";

// }

// greet()
// .then((result)=>{
//     console.log("Promise resolved")
//     console.log(result)

// })
// .catch((err)=>{
//     console.log("Promise rejected",err)
// })

// let demo = async ()=>{
//     return 5;
// };


// await keyword 

// function getNum(){
//     return new Promise ((resolve,reject )=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num)
//             resolve()
//         ,1000})
//     });
// }
// async function demo() {
//      await getNum();
//      await getNum();
//      getNum();  
// }


// h1 = document.querySelector('h1');

// function changeColor(color,delay){
//     return new Promise((resolve ,reject)=>{
//     setTimeout(() => {
//         let num = Math.floor(Math.random()*5)+1;
//         if(num > 3){
//             reject("Something went wrong")
//         }
//         h1.style.color = color;
//         resolve("color changed");
//     },delay);

//    }) ;
    

// }
// async function demo(){
//     try{
//         await changeColor('red',1000);
//         console.log("Red color changed")
//         await changeColor('blue',1000);
//            console.log("Blue color changed")
//         await changeColor('green',1000);
//            console.log("Green color changed")
//         await changeColor('yellow',1000);
//            console.log("Yellow color changed")
//         await changeColor('black',1000);
//            console.log("Black color changed")
//     }catch(err){
//         console.log("Something went wrong")
//         console.log(err);
//     }
     

//     let a = 5;
//     console.log(a);
//     a = a+5;
//     console.log(a);
// }




//json


let jsonRes ='{"fact":"Cats have 300 million neurons; dogs have about 160 million","length":58}';
let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);


let obj = {
    name: "John",
    age: 30,
    city: "New York"
};
let validJson = JSON.stringify(obj);
console.log(validJson);
