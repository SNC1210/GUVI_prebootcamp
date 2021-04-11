const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
 var print_num=function(){
     var num= userInput[0].split(" ");
     var A  = +(num[0]);
     var N  = +(num[1]);
     for(var i=1;i <= N;i++){
         console.log(A);
     }
 };
 print_num();
});
