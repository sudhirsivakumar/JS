
let str1="3";
let str2="4";


num1=Number(str1);
num2=Number(str2);

let op="*";

switch(op){
    case '+':
        let a=num1+num2;
        console.log("num1 + num2 = ",a);
        break;
    case '-':
        let s=num1-num2;
        console.log("num1-num2 = ",s);
        break;
    case '*':
        let m=num1*num2;
        console.log("num1*num2 = ",m);
        break;
    case '/':
        let d=num1/num2;
        console.log("num1/num2 = ",d);
        break;
    default:
        console.log("Invalid Input");
}
