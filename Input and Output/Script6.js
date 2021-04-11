const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
 var printInLine=function(){
     for(var i=0;i<userInput.length;i++){
      var inp= userInput[i];
         console.log(inp)
     }
         
 };  
 printInLine();
 
});
