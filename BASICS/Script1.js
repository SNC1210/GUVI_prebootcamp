 const readline = require('readline');
 const inp = readline.createInterface({
  input: process.stdin
 });
 const userInput = [];
 inp.on("line", (data) => {
 userInput.push(data);
 });
 inp.on("close", () => {
   // start code here
   var compositeNum= function(){
       var num = +(userInput);
       let count=0;
       for(let i=1;i<num;i++){
           if(num % i ===0)
           count++;
       }
       if(count>2)
       console.log("yes");
       else
       console.log("no");
   };
   compositeNum();
 });