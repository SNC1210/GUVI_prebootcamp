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
var sum_Of_Num=function(){
    var n1= +(userInput[0]);
     var sum= +(((n1+1)*n1)/2);
     console.log(sum);
};
sum_Of_Num();
    
});