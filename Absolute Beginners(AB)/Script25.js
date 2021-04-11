const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
 var celToFah=function(){
 
       var celc = parseFloat(userInput[0]);
       var farh = parseFloat((celc*1.8)+32);
       console.log(farh.toFixed(2));
 };
  celToFah();
});
