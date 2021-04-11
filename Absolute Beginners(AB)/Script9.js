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
var tableOf9=function(){
    var table=[];
    var n1= +(userInput[0]);
    if( n1 === 0)
    console.log("NULL");
    else {
        for(var i=1; i<=n1;i++){
            var n2= 9*i ;
            table.push(n2);
            
        }
         }
    console.log(table.join(" "));
};
   tableOf9();

});