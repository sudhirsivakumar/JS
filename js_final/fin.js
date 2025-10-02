let name = prompt("Enter your name:");
if (name.trim() === "") {
    throw new Error("Name is required!");
}

let email = prompt("Enter your email:");
if (email.trim() === "") {
    throw new Error("Email is required!");
}

let ageStr = prompt("Enter your age:");
let age = parseInt(ageStr);
if (isNaN(age)) {
    throw new Error("Age must be a number!");
}
if (age < 12) {
    throw new Error("Age must be 12 or older!");
}

user = {name: name, email: email, age: age};

alert("Registration successful! Starting quiz...");


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
    alert("Quiz complete! Calculating results...");

let percentage=(score/4)*100;
let results = {
    name: name,
    email: email,
    totalMarks: score,
    percentage: percentage,};

let resultMsg = "Results:\n" +
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Age: " + age + "\n" +
    "Total Marks: " + score + "/4\n" +
    "Percentage: " + percentage + "%\n\n" +
    "Full Data in JSON:\n" + JSON.stringify(results,null,2);
    
    setTimeout(() => {alert(resultMsg)},2000);
