// let btn = document.querySelector('button');
// console.log(btn);

// // btn.onclick = function() {
// //     console.log('Button clicked');
// // }

// //or we can set the function in a variable and then call it
// // let sayHello = function (){

// function sayHello (){
//     alert('Hello');
// }
// btn.onclick = sayHello;




//more buttons can be selected by querySelectorAll

// let btns = document.querySelectorAll('button');

// for(btn of btns){
//     btn.onclick =sayHello;
//     btn.onmouseenter = function (){
//         console.log('Mouse entered');
//     }
// }
// function sayHello (){
//     alert('Hello');
// }




// add event listener




// let btns = document.querySelectorAll('button');
// for (btn of btns){
//    //btn.onclick = sayHello;
//    btn.addEventListener('click', sayHello);
//    //btn.onclick = sayName;
//     btn.addEventListener('click', sayName);

// }
// function sayHello (){
//         alert('Hello');
// }
// function sayName (){
//     alert('akshay');
// }




//event listener for multiple events

// let para = document.querySelector('p');
// para.addEventListener('click',function (){
//     console.log('Paragraph clicked');

// });
// let box = document .querySelector('.box');
// box.addEventListener('mouseenter',function (){
//     console.log('Mouse entered');
// });




//this in event listener - refers to the element that triggered the event or to apply the ebent listener to multiple elements




// let btn = document.querySelector('button');
// let para = document.querySelector('p');
// let h3 = document.querySelector('h3');
// let h1 = document.querySelector('h1');


// btn.addEventListener('click',function (){
//     console.log(this.innerText);
//     this.style.backgroundColor = 'red';
//     this.style.color = 'white';
// });
// para.addEventListener('click',function (){
//     console.log(this.innerText);
//     this.style.backgroundColor = 'red';
//     this.style.color = 'white';
// });
// h1.addEventListener('click',function (){
//     console.log(this.innerText);
//     this.style.backgroundColor = 'red';
//     this.style.color = 'white';
// });
// h3.addEventListener('click',function (){
//     console.log(this.innerText);
//     this.style.backgroundColor = 'red';
//     this.style.color = 'white';
// });





                    // |
                    // |
                    // |
                    





//or we can use the same function for all the elements
//this is also used to reduce the redundancy of the code

// let btn = document.querySelector('button');
// let para = document.querySelector('p');
// let h3 = document.querySelector('h3');
// let h1 = document.querySelector('h1');

// function changeColor(){
//     console.log(this.innerText);
//     this.style.backgroundColor = 'red';
//     this.style.color = 'white';
// }
// btn.addEventListener('click',changeColor);

// para.addEventListener('click',changeColor);

// h1.addEventListener('click',changeColor);

// h3.addEventListener('click',changeColor);




//keyboards events

// let input = document.querySelector('input');
// input.addEventListener('keydown',function (event){
//     console.log(event.key);
//     console.log(event.code);
//     console.log('Key down');
// });
// input.addEventListener('keyup',function (){
//     console.log('Key up');
// });



//move your character using keyboard events

// let inp = document.querySelector('input');

// inp.addEventListener('keydown',function (event){
//     console.log("code = ", event.code); //--->  ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)


//     if(event.code === 'keyU'){
//         console.log('Move up');
//     }
//     else if(event.code == 'keyD'){
//         console.log('Move down');
//     }
//     else if(event.code == 'keyL'){
//         console.log('Move left');
//     }
//     else if(event.code == 'keyR'){
//         console.log('Move right');
//     }

// });




// form events 

// let form = document.querySelector('form');
// form.addEventListener('submit',function (event){
//     event.preventDefault();
    
//     //extracting data from the form

//     let user = document.querySelector('#username');
//     let pass = document.querySelector('#password');
//     console.log(user.value);
//     console.log(pass.value);
//     alert( `hi ${user.value} your password is ${pass.value}`);
// });




//more events 

// change event and input event 
let form = document.querySelector('form');
form.addEventListener('submit',function (event){
    event.preventDefault();
});
let user = document.querySelector('#username');
let pass = document.querySelector('#password');

user.addEventListener('change',function (){
    console.log('Username changed');
    console.log( "final value = ",this.value);

});
user.addEventListener('input',function (){
    console.log('input changed');
    console.log( "final value = ",this.value);

});
