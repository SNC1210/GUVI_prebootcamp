const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
 var print_Values=function(){
     var n1= +(userInput[0]);
     while(n1>=1){
         console.log(n1);
         n1--;
     }
 };
 print_Values();
});
