const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
 var printSeprt=function(){
     var arr=[];
     var f="";
     var str= userInput[0].split("");
     for(var i=0;i<str.length;i++){
        arr.push(str.i)
        f +=str[i]+" "
       }
    console.log(f.trim());
 };
 printSeprt();
});
