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
var areaOfRec= function(){
    var A= +(userInput[0]);
    var B= +(userInput[1]);
    var C= +(A*B);
    console.log(C.toFixed(1));
};
   areaOfRec();
});