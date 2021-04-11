const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
 var leap=function(){
     var y= +(userInput[0]);
     if(y % 4 === 0 || y % 400 === 0)
     console.log("Y");
     else
     console.log("N")
 };
 leap();
});
