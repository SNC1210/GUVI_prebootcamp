const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
 var facto=function(){
     var num= +(userInput[0]);
     var fact=1;
     for(var i=1;i <= num;i++){
         fact=fact*i;
     }
     console.log(fact);
 };
 facto();
});
