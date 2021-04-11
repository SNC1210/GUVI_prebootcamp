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
var sum= function(){
    var a= +(userInput[0]);
    var b= +(userInput[1]);
    var c= (a+b);
    console.log(c.toFixed(1));
};
  sum();
});