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
var series= function(){
    var n1= +(userInput[0]);
    var n2= +(Math.round(n1));
    if(n2 === 0)
    console.log(0);
    else if(n2 < 0)
    console.log("Error");
    else
    console.log(n2*n2);
};
   series();
});