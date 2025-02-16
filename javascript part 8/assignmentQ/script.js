//Question no 1 
// square and sum the array elements using the arrow function and then find the average of the array 



// let nums  = [1,2,3,4,5];
// const square = nums.map((num)=> num*num);
// console.log(square);


// let sum = square.reduce((acc,curr)=> acc + curr ,0);
// let avg = sum / nums.length ;
// console.log(avg);





// Question no - 2

//create a new array using the map function whose each element is equal to the original element plus 5 


// let nums = [2,4,6,-8,-5];
// let newArray = nums.map((num)=> num+5);
// console.log(newArray);



//Question no -3

//create aan new array  whose element is in uppercase of words present in the original array 

// let words = ["apple", "banana", "cherry"];
// let newArray = words.map((word)=> word.toUpperCase()
// );
// console.log(newArray);





//Question no -4

// write an function called doubleAndReturnArgs which accepts an array and a variable number of arguments . the function should return a new array with the original array values and all of the additional arguments doubled 


//  doubleAndReturnArgs = (arr,...args) => [...arr,...args.map((v)=> v*2),
//  ];
//  console.log(doubleAndReturnArgs([1, 2, 3], 4, 5)); // [1, 2, 3, 8, 10]
// console.log(doubleAndReturnArgs([10, 20], 1, 2, 3)); // [10, 20, 2, 4, 6]




// Question no - 5

// write a fuction called mergeObject that accepts two objects and return a new object which contains all the keys and values of the first object and second object 


const mergeObject = (obj1,obj2) => ({...obj1,...obj2});
console.log(mergeObject({a:1,b:2},{c:3,d:4}));
// { a: 1, b: 2, c: 3, d: 4 }

