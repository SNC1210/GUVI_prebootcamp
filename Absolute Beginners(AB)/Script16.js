const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
 var print_values=function(){
     var n1= +(userInput[0]);
     for( var i=1;i<=n1;i++){
       console.log(i);  
     }
 };
  print_values();
});
