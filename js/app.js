console.log('app.js is connected.');

let hourNow = prompt('What time is it? 0-23');

let greeting;
if(hourNow > 18 && hourNow < 24){
    greeting = 'Go to Bed';
} else if(hourNow >12 && hourNow < 18) {
    greeting = 'Good day sir.';
} else if( hourNow >= 0 && hourNow < 24){
    greeting = 'Go to work, and Good Morning.';
} else {
    greeting = 'wait, you didnt give me the right response. Who knows what time it is?';
}
console.log(greeting);
document.write(greeting);


//This section below was the if/else logic after we added the Date object and the getHours() method. This was part of Class 6 Demo, to show objects and methods.
/** 
let today = new Date();
console.log('this is the letiable today',today);
let hourNow = today.getHours(); 
let greeting;
if (hourNow > 18 && hourNow < 24) {
  greeting = 'Good evening, Class!';
} else if (hourNow > 12 && hourNow < 24) {
  greeting = 'Good afternoon, Class!';
} else if (hourNow >= 0 && hourNow < 24) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}
document.write('<h3>' + greeting + '</h3>');
*/



function makeSandwich(){
  //show first to see the undefined without return. 
  console.log('we have invoked our function in order to run our console log');
  // return 'hello from the js file';
}




/** 
JavaScript - Coding language of the web. Used to create and control dynamic website content.

conditionals - A series of checks that determine an outcome. If something happens, the do this. If that does not happen but this happens, do this. If all else fails, then do this last thing.

operators - Series of symbols that perform arithmetic on numbers. (+, -, *, **, /, %. ++, --)


data types - A particular kind of data item, integer(number), string (words), boolean (true/false), array. 
There are more advanced data types that will be introduced in 401.


variable - a representation or nick name for some type of data.

*/