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
var reverse_Str=function(){
    var str=userInput[0];
    var newstr ="";
    for(var i=str.length-1;i>=0;i--){
        newstr += str[i];
    }

console.log(newstr);
};
reverse_Str();
    
});