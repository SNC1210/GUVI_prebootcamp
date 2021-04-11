const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
 var print_Even=function(){
     var num=+(userInput[0]);
     for(var i=1;i<=num;i++){
         if(i%2 === 0)
         console.log(i);
     }
 };
 print_Even();
});
