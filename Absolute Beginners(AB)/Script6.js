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
var cube=function(){
    var c1= +(userInput[0]);
    var c2= +(c1*c1*c1);
    console.log(c2);
};
   cube();
});