const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
 var print_Smallest=function(){
     var num= userInput[0].split(" ");
     var n1= +(num[0]);
     var n2= +(num[1]);
     var small= (n1<n2)?n1:n2;
     console.log(small);
 };
 print_Smallest();
});
