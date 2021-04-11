const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
var area_equi= function( ){
var a= parseFloat(userInput[0]);
var b=Math.sqrt(3)*(1/4);
var c=(b*a*a);


console.log(c.toFixed(2));
};
area_equi();
//end-here
});