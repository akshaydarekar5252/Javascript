// let inp = document.querySelector('input');
// //mouseout event 
// inp.addEventListener('mouseout',function (){
//     console.log('Mouse out');
//     this.style.backgroundColor = 'red';

// });
// //keypress event
// inp.addEventListener('keypress',function (){
//     console.log('key pressed');
//     this.style.backgroundColor = 'green';

// });
// //scroll event
// inp.addEventListener('scroll',function (){
//     console.log('scrolling');
//     this.style.backgroundColor = 'blue';

// });
// //load event
// inp.addEventListener('load',function (){
//     console.log('loading');
//     this.style.backgroundColor = 'yellow';

// });


//Q2

// let btn = document.querySelector('button');
// btn.addEventListener('click',function (){
//     console.log('clicked');
//     this.style.backgroundColor = 'green ';

// });

//Q3

let inp = document.querySelector('input');
let h2 = document.querySelector('h2');
inp.addEventListener('input',function (){
     // Allow only letters (a-z, A-Z) and spaces
     let filteredText = inp.value.replace(/[^a-zA-Z ]/g, '');
     inp.value = filteredText; // Prevents entering invalid characters
     h2.innerText = filteredText; // Displays the valid name

});
