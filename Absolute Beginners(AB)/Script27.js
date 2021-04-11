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
var strn_len=function(){
    var str= userInput[0];
    var str1=str.replace(/\s+/g, '');
    var len=0;
    for(var i=0;i<str1.length;i++){
        len++;
    }
    console.log(len);
           
};
strn_len();
});