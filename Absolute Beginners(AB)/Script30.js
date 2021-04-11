const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var printDigitOfNum=function(){
 var number = userInput;
    output = [];

while (number) {
    output.push(number % 10);
    number = Math.floor(number/10);
}

console.log(output.reverse().join(' ')); 
 };
 printDigitOfNum();
});
