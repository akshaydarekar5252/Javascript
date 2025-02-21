// let smallImages = document.getElementsByClassName("oldImg");
// for (let i=0; i< smallImages.length; i++){
//     console.log(smallImages[i]);
// }

// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelectorAll("div a"));


// let links = document.querySelectorAll(".box a");

// // for( let i=0; i < links.length; i++ ) {
// //     links[i].style.color = "yellow";
// // }

// //or 

// for(link of links){
//     link.style.color = "red"; //inline style 
// }




//practice question 

let para = document.createElement("p");
para.innerText="Hey I'm red!";
document.querySelector("body").append(para);
para.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText="Hey I'm blue h3!";
document.querySelector("body").append(h3);

h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para1 = document.createElement("p");

h1.innerText="i am div";
para1.innerText="me too!";

div.append(h1);
div.append(para1);
div.classList.add("box");

document.querySelector("body").append(div);

