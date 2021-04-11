const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
var converte= function(){
    var A= +(userInput[0]);
    var B= A*1000;
    var C=A*100000;
    console.log(B);
    console.log(C);
};
converte();


});