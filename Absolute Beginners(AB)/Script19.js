const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
 var sumOf_digit=function(){
     var num= parseInt(userInput[0]);
     var sum=0;
     while(num !== 0){
            sum=parseInt(sum + num %10);
            num=(num/10);
         }
    console.log(sum);
 };
 sumOf_digit();
});
