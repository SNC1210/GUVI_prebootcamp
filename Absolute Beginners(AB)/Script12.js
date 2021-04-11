const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var quad_eq=function(){
    var  coeff= (userInput[0]).split(" ");
    var     A = +(coeff[0]);//coefficient of X2
    var     B = +(coeff[1]);//coefficient of X
    var     C=  +(coeff[2]);//C is Constant
    var     D=  parseFloat((Math.pow(Math.pow(B,2)-(4*(A*C)),0.5))/(2*A));//Discriminant
    var     r1= parseFloat((-B/(2*A) + D));
    var     r2= parseFloat((-B/(2*A) - D));
    console.log(r1.toFixed(2));// 1st root of qudratic equation
        console.log(r2.toFixed(2));// 2nd root of quadratic equation
};
quad_eq();
});
