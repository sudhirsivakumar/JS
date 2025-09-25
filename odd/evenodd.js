console.log("---------------EVEN OR ODD DAY MESSSAGE------------");

//STRING INPUT  
let StringNumber="12";

//CONVERSION TO NUMBER
let num=Number(StringNumber);

switch(num%2){
    case 0:
        console.log("Even Day");
        break;

    case 1:
        console.log("Odd Day");
        break;

    default:
        console.log("Invalid input");
}

let DayNumber=5;

switch(DayNumber){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("It's a weekday");
        break;
    

    case 6:
    case 7:
        console.log("(It's the weekend");
        break;

    default:
        console.log("Invalid day");
}