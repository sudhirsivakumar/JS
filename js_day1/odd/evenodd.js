//STRING INPUT  
let StringNumber="11";

//CONVERSION TO NUMBER
let num=Number(StringNumber);

switch(num%2)
{
    case 0:
        console.log("Even Day");
        break;

    case 1:
        console.log("Odd Day");
        break;

    default:
        console.log("Invalid input");
}