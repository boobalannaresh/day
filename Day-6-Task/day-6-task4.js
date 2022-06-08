// Find the culprits and nail them — debugging javascript

// Fix the code to get the largest of three.

// Code:

aa = (f,s,t) => {
//  let f,s,t;
 console.log(f,s,t);
 if(f>s &&f>t){
 console.log(f)}
 else if(s>f && s>t){
 console.log(s)}
 else{
 console.log(t)}
}
aa(1,2,3);

// --------------------------------------------------------------------------------------//

// Fix the code to Sum of the digits present in the number

// Code:

// let n = 123;
// console.log(add(n));
// function add(n)
// {
// let sum = 10;
// for(var i=0;i<n.length;i++){
//  sum+=n[i]
//  }
//  return sum;
// }

let n = "123";
console.log(add(n));
function add(n)
{
let sum = 0;
for(var i=0;i<n.length;i++){
 sum+= parseInt(n[i])

 }
 return sum;
}

// --------------------------------------------------------------------------------------------//

// Fix the code to Sum of all numbers using IIFE function

// Code:

// const arr = [9,8,5,6,4,3,2,1];
// (function() {
//  let sum = 0;
//  for (var i = 0; i <= arr.length; i++);{
//  sum += arr[i];
//  }
//  console.log(sum);
//  return sum;
// })();

const arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i < arr.length; i++){
 sum += arr[i];
 }
 console.log(sum);
 return sum;
})();

// ------------------------------------------------------------------------------------------------//

// Fix the code to gen Title caps.

// Code:

// var arr = [“guvi”, “geek”, “zen”, “fullstack”];
// var ano = function(arro) {
//  for (var i = 0; i <= arro.length; i++) {
//  console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
//  }
// }
// ano();

var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
 for (var i = 0; i <= arr.length; i++) {
 console.log(arr[i].toUpperCase() + arr[i].substr(1));
 }
}
ano();