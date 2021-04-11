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
var length= function(){
    var r1= +(userInput[0]);
    if(r1 < 0)
    console.log("Error");
    else
    var c= (Math.PI*2*r1);
    console.log(c.toFixed(2));
};
   length();
});