console.log("----------------SIMPLE CALCULATOR------------");
console.log("Enter Your Input:");
let string1="3";
let string2="4";


num1=Number(string1);
num2=Number(string2);

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



let string3="5";

num3=Number(string3);


switch(num3){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}