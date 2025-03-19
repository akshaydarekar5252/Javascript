// // //  visualizing the call stack 

// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//    let ans = two() + one();
//     console.log(ans);
    
// }
// three();


// // //js is an single threaded language that can be non-blocking
// // //single threaded means that it has only one call stack

// setTimeout(() => {
//     console.log('hello world');
// },200)
// console.log('I am first');


// // callback hell 

h1 = document.querySelector('h1');

function changeColor(color,delay){
    return new Promise((resolve ,reject)=>{
    setTimeout(() => {
        h1.style.color = color;
        resolve("color changed");
    },delay);

   }) ;
    

}

changeColor('red',1000)
.then(()=>{
    console.log(' red color changed');
    return changeColor('blue',1000);
})
.then(()=>{
    console.log(' blue color changed');
    return changeColor('green',1000);
})
.then(()=>{
    console.log(' green color changed');
    return changeColor('yellow',1000);
})
.then(()=>{ 
    console.log(' yellow color changed');
   
})






// changeColor('red',1000,() => {
//     changeColor('green',1000 , ()=>{
//         changeColor('blue',1000,()=>{
//             changeColor('yellow',1000,()=>{
//                 changeColor('black',1000)
//             });

//         });
//     });
// });
//callback nesting is called callback hell


// promises
// promises are used to handle asynchronous operations in javascript


// function savetoDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed>5){
//         success();

//     }else{
//         failure();
//     }
// }
// savetoDb(
//     "Akshay Darekar ",
//     ()=>{
//         console.log('data saved successfully');
//         savetoDb("Apna College",
//             ()=>{
//                 console.log('data2 saved successfully');
//                 savetoDb("harry poter",
//                     ()=>{
//                         console.log('data3 saved successfully');
//                     },()=>{
//                         console.log('data3 not saved');
//                     }
//                 )
//             },()=>{
//                 console.log('data2 not saved');
//             }
//         )
//     },
//     ()=>{
//         console.log('data not saved');
//     }
// );




function savetoDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("success : data saved successfully");
        }else{
            reject( "failure : data not saved");
        }

    });
}

// let request = savetoDb("Akshay Darekar"); // req = promise object

// request.then(()=>{
//   console.log('promise was resolved');
//   console.log(request)  
// })
// .catch(()=>{
//     console.log('promise was rejected');
//     console.log(request);
// })


//or

//  savetoDb("Akshay Darekar")
//  .then(()=>{
//   console.log(' data 1  saved promise was resolved');
//   savetoDb("Apna College").then(()=>{
//     console.log(' data 2 saved promise was resolved');

//   });

   
// })
// .catch(()=>{
//     console.log('promise was rejected');
    
// })
