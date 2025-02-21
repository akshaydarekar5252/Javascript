//assignment questions 

// Question no - 1

//create a new input and button element on the page using javascript only. set the text of of button to "click me!";

let button = document.createElement("button");
let input = document.createElement("input");
button.innerText= "click me!";

document.querySelector("body").append(input);
document.querySelector("body").append(button);



//Question no - 2

//add following attributes to the element :
//- change placeholder value of input to "username"
//- change the id of button to "btn"
button.setAttribute("id","btn");
input.setAttribute("placeholder","username");


//Question no - 3

//access the btn using the querySelector and button id. change the button background color to blue and text color to white 

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");


//Question no -4

// create an h1 element on the page and set its text to "DOM Practice "
 //underline  Change its color to purple

 let h1 = document.createElement("h1");
 h1.innerHTML = "<ul> DOM Practice</ul>";
 document.querySelector("body").append(h1);
 

 //Question no  - 5

 // create a p tag page and set its text to "apna collage delta practice ", where delta is bold 

 let p =document.createElement("p");
 p.innerHTML= "Apna College <b> Delta </b> Practice ";
 document.querySelector("body").append(p) ;






