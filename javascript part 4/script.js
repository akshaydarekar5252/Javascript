   //for loop

// for(let i=1; i<=5; i++){
//     console.log(i)
// }

    //print all odd numbers (1 to 5 )
     //forward 
// for(let i=1; i<=15; i=i+2) {
//     console.log(i)
// }
    // //backwards 
// for(let i=15; i>=1; i=i-2) {
//     console.log(i)
// }

        //print all even numbers (2 to 10 )
// for(let i=2; i<=10; i=i+2) {
//     console.log(i)
// }

        //print the multiplication table of 5
// let n= prompt("Enter the number");
// n = parseInt(n);//convert string to number
// for( let i=n; i<=n*10; i=i+n){
//     console.log(i)
// }


//nested for loop
// for(let i=1; i<=3; i++) {
//     console.log(`outer loop ${i}`);
//     for(let j=1; j<=3; j++) {
//         console.log(j);
//     }
// }



//while loop
//forward
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// //backwards
// let u=5;
// while(u>=1){
//     console.log(u);
//     u--;
// }

// let i=0;
// while(i<=20){
//     console.log(i);
//     i++;
// }



//loop with array
// let fruits = ['apple', 'banana', 'mango', 'orange', 'grapes'];
// console.log("forward");
// for(let i=0; i<fruits.length; i++){
//     console.log( i,fruits[i]);
// }
// //reverse 
// console.log("reverse");
// for(let i=fruits.length-1; i>=0; i--){
//     console.log(i, fruits[i]);
// }



//loop with nested loop
//example no 1 

// let heroes = [["ironman", "captain america", "thor"], ["spiderman", "black panther", "black widow"]];
// for(let i=0; i<heroes.length; i++){
//     console.log(i,heroes[i] ,heroes[i].length);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(`j=${j} ,${heroes[i][j]}`);
//     }
// }

//example no 2 

// let student = [["ram",95] , ["shyam", 85], ["mohan", 75], ["sohan", 65]];
// for( let i=0; i<student.length; i++){
//         console.log(`info of student  #${i+1}`);
//     for(let j=0; j<student[i].length; j++){
//         console.log(student[i][j]);
//     }
// }


//for of loop 
// let fruits = ['apple', 'banana', 'mango', 'orange', 'grapes'];
// for(let fruit of fruits){
//     console.log(fruit);
// }

//nested for of loop
let heroes = [["ironman", "captain america", "thor"], ["spiderman", "black panther", "black widow"]];
for (list of heroes){
        // console.log(list);
    for(hero of list){
        console.log(hero);
    }
}