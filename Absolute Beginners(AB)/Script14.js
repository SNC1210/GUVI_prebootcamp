const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
 var simple_interest=function(){
     var n1= (userInput[0].split(" "));
     var P = +(n1[0]);// principle
     var T = +(n1[1]);//rate
     var R = +(n1[2]);//time
     var SI= +((P*T*R)/100);
     console.log(SI.toFixed(2));
 };
 simple_interest();
});
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
 var simple_interest=function(){
     var n1= (userInput[0].split(" "));
     var P = +(n1[0]);// principle
     var T = +(n1[1]);//rate
     var R = +(n1[2]);//time
     var SI= +((P*T*R)/100);
     console.log(SI.toFixed(2));
 };
 simple_interest();
});
