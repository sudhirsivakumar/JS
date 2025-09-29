let score = 0;

let q1 = prompt("Q1: What is 2 + 2?\n1) 2\n2) 4\n3) 6");
switch (q1) {
    case "4":
        score++;
        break;
}
let q3 = prompt("Q3:  What is 3 + 3?\n1) 3\n2) 6\n3) 9");
switch (q3) {
    case "6":
        score++;
        break;
}
let q2 = prompt("Q2:  What is 4 + 4?\n1) 4\n2) 8\n3) 12");
switch (q2) {
    case "8":
        score++;
        break;
}
let q4 = prompt("Q4:  What is 5 + 5?\n1) 5\n2) 10\n3) 15");
switch (q4) {
    case "10":
        score++;
        break;
}

let q5 = prompt("Q5:  What is 6 + 6?\n1) 6\n2) 12\n3) 18");
switch (q5) {
    case "12":
        score++;
        break;
}

alert("Your Final Score: " + score + "/5");
