// q1 
// write a javascript function that returns array elements larger than a number.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let num = 5;
// // elements larger than a number num

// function largerThanNum(arr, num) {
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>num){
//             console.log(arr[i]);
//         }
//     }
// }
// largerThanNum(arr, num);


//or 


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let num = 5;

// function largerThanNum(arr, num) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > num) {
//             result.push(arr[i]);
//         }
//     }
//     return result;  // Returning the filtered array
// }

// console.log(largerThanNum(arr, num));  // Expected output: [6, 7, 8, 9, 10]



//q2
// let str = "abcdabcdefgggh";
// function getUnique(str){
//     let ans = "";
//     for (let i = 0; i < str.length; i++) {
//         let currChar = str[i];
//         if (ans.indexOf(currChar) === -1) {
//             ans += currChar;
//         }
//     }
//     return ans;
// }
// getUnique(str); // Expected output: "abcdefgh"









//q3

// let country = ["India", "USA", "Japan", "United States of America", "Germany", "Canada"];

// function getLongestCountryName(country) {
//     let longestCountry = "";
//     for (let i = 0; i < country.length; i++) {
//         if (country[i].length > longestCountry.length) {
//             longestCountry = country[i];//update the longest country value 
//         }
//     }
//     return longestCountry;
// }
// getLongestCountryName(country); // Expected output: "United States of America"



//q4
// let str = "helloworld";
// function countVowels(str){
//     let count = 0;
//     for ( let i=0; i<str.length; i++){
//         if(
//             str.charAt (i)==='a' || 
//             str.charAt (i)==='e' ||
//             str.charAt (i)==='i' || 
//             str.charAt (i)==='o' ||
//             str.charAt (i)==='u'

//             ){
//             count++;
//         }
    
//     }
//     return count;
// };
// countVowels(str); // Expected output: 3


//q5
let start = 100;
let end = 200;
function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}
console.log(generateRandom(start, end)); // Expected output: Random number between 100 and 200



