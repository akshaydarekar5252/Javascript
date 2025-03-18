let gameSeq = [];
let userSeq = [];


let btns =["yellow", "purple", "green", "red"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started === false) {//if game has not started
        console.log("Game Started");//log game started
        started = true;//set started to true
        levelUP();//call levelUP function
    }
});

function gameFlash(btn){
    btn.classList.add("flash");//add flash class to button
    setTimeout(function() {
        btn.classList.remove("flash");//remove flash class from button
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");//add flash class to button
    setTimeout(function() {
        btn.classList.remove("userflash");//remove flash class from button
    }, 250);
}


function levelUP() {
    userSeq = [];//reset userSeq array
    level++;//increment level
    h2.innerHTML = `Level ${level}`;//change h2 to level
     
     let randomIdx = Math.random() * 3;//get random index
     randomIdx = Math.floor(randomIdx);//round down random index
    //  console.log(randomIdx);

     let randomColor = btns.at(randomIdx);//get random color from btns array
    //  console.log(randomColor);
     let randomBtn = document.querySelector(`.${randomColor}`);//get random button by class name
    //  console.log(randomBtn);

    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);//call btnFlash function
}

function checkAns(idx){

// console.log("curr level: ", level);
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUP, 1000);
        }
        console.log("same value ");}
        else {
            h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to restart`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor="white";

            },150);
            reset();
        }
}
        


function btnPress(){
    // console.log(this);//log button that was pressed
   let btn = this;//get button that was pressed
   userFlash(btn);

   userColor = btn.getAttribute("id");//get id of button that was pressed
    userSeq.push(userColor);//add id to userSeq array

    checkAns(userSeq.length - 1);

}

let allBtns = document.querySelectorAll(".btn");//get all buttons

for(btn of allBtns){
    btn.addEventListener("click", btnPress);//add event listener to each button
}

function reset(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}
