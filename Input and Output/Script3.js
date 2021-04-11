const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
 var printInput=function(){
     var ip1= userInput[0];
     var ip2= userInput[1];
     console.log(ip1);
     console.log(ip2);
     
 };
 printInput();
 
});
