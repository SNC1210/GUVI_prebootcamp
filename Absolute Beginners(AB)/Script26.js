const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
 var hcf=function(){
     var num = userInput[0].split(" ");
     var n1=num[0];
     var n2=num[1];
     var i,hcf1;
     for( i=0; i<= n1 && i<= n2;i++)
         if(n1%i===0 && n2%i===0)
          hcf1=i;
     console.log(hcf1);
 };
 
 hcf();
});
