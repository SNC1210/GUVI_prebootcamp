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
     var arr=[];
     var j="";
     var inp1= +userInput[0];
     var inp2= +userInput[1];
     var inp3= +userInput[2];
    console.log(inp1+" "+inp2+" "+inp3);
 };
 printInLine();
 
});
