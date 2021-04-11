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
var check = function(){
    var a= +(userInput[0]);
    var b= +(Math.round(a));
    if(b === 0)
    console.log("zero");
    else if(b % 2 === 0 )
    console.log("Even");
    else
    console.log("Odd");
};
   check();
//end-here
});