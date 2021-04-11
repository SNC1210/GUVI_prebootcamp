const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
 var multiples=function(){
     var multip=[];
     var n1= +(userInput[0]);
     for(var i=1;i<=3;i++){
         n2= n1*i;
         multip.push(n2);
        
     }
     console.log(multip.join(" "));
 };
 multiples();
});
