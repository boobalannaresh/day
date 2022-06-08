// // fix.html

<!DOCTYPE html>
<html>
<body>
 <script>
 alert( “I’m JavaScript!’);  
 </script>
 Whats the error in this ?
</body>
</html>

// fix it

alert("I’m JavaScript!"); 
// this line is ( " ) double quotes missing

// // ----------------------------------------------------------------------------------------------//

// // Explain the below how it works

// // explain.html

alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)        // this is multiline line use to help ( ` ) grave or Template literal
alert(3 +
1
+ 2); // this is multiple line code and its working

// // ------------------------------------------------------------------------------------------------//

// Fix the below to alert Guvi geek

// fix.html

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"

admin = fname+""+lname;
alert(admin); 

// Output:

Guvi geek

// ----------------------------------------------------------------------------------------------------//

// Fix the below to alert hello Guvi geek

// fix.html

let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( 'hello ${name}' );

// fix it

alert( `hello ${ name }` ); //tempalte literal using inside alert

// --------------------------------------------------------------------------------------------------//

// Fix the below to alert sum of two numbers

// fix.html

let a = prompt("First number?");   //given 2
let b = prompt("Second number?");  //given 2
alert(+a + +b);                    //finally you got 4 

// ------------------------------------------------------------------------------------------//

// If you run the below scritpt you will get “Code is Blasted”

// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

// fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js

// var a = "2" > "12";                // change lessthen ( < ) symbol 
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }

// Output:

Diffused

// --------------------------------------------------------------------------------------//

// How to get the success in console.

// fix.html

let b = (prompt("Enter a number?"));
    a=parseInt(b)  
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

// -------------------------------------------------------------------------------------//

Fix the code to welcome the boss

let message;
if (null || 2 || undefined )
{
   message = "welcome boss";
}
else
{
  message = "Go away";
}
  console.log(message);

// ---------------------------------------------------------------------- //

// How to get the correct score in console.

// fix.html

let value = prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

// fix it

let value = parseInt(prompt('How many runs you scored in this ball'));
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

// -----------------------------------------------------------------------------//
Fix the code to welcome the boss

let message;
let lock =null;
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);

//   -------------------------------------------------------------------------------------- //

// Change the code to print

// 3

// 2

// 1

// fix.html
You can change only 2 characters
let i = 3;
while (i) {
  console.log( --i );
}

// fix it

let i = 4;
while (i>1) {
  console.log( --i );
}

// -------------------------------------------------------------------------------------------------// 

// Change the code to print even numbers

// fix.html
for (let num = 2; num <= 20; num += 1) {
    console.log(num)
  }
You are allowed to modify only one character 

// fix it

for (let num = 2; num <= 20; num += 2) {
    console.log(num)
  }

// --------------------------------------------------------------------------------------------------- //

// Change the code to print all the gifts

// fix.html

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log('Wrapped ${'gifts[i]'} and added a bow!');
}

// fix it 

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(gifts[i]);
}

// -------------------------------------------------------------------------------------------//

// Whats the msg printed and why?

var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);

// output:

  hi

// lemeout is : Uncaught ReferenceError: lemein is not defined

// msg is : Uncaught ReferenceError: lemein is not defined

// ---------------------------------------------------------------------------------------------- //

// Whats the msg printed and why? Guess you answer before running it.

var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);

// output:
 hi
