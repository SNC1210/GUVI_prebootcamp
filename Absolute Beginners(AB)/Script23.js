const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
 var printOddEvenNum=function(){
    let num= +(userInput[0].split(' '));
    let digit=[];
    let even=[];
    let odd=[];
    while(num){
    digit.push(num % 10);
    num = Math.floor(num / 10);
    }
    for(let j=0;j<digit.length;j++)
    {
        if(digit[j] %2 !== 0)
        odd.push(digit[j]);
        else
        even.push(digit[j]);
    }
    console.log(even.reverse().sort().join(" "));
    console.log(odd.reverse().sort().join(" "));

 };
  printOddEvenNum();
});
