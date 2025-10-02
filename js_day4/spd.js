let std="sudhir";
let pass=123;

let stdcheck = prompt("Enter Name");
if (stdcheck==std)
{
    let passcheck = prompt("Enter Password");
    if (passcheck==pass)
    {
        alert("logged in succesfully!");
        let age = prompt("Enter birth year");
        let date=new Date();
        let year=date.getFullYear();
        let age1=year-age;
        alert("you are "+age1+" years old");
        if (age>=18){
            alert("you are eligible from this year");
        }
        let time=date.getHours();
        console.log(time);
        if (time<12){
            alert("good morning!");
        }else if(time=>12&&time<=16){
            alert("Good afternoon!");
        }else{
            alert("Good evening!");
        }
        let num1 = parseInt(prompt("enter any number for mathematical operation arusi"));
        let num2 = parseInt(prompt("inoru number soldraa!"));
        alert ("ithan answer uhh: "+(num1+num2));
        alert ("Dont keep watching the clock, do what it does\n\t\t\t\t\t\t\t\t\t\t-SDR");
        let student_json = {
            name: std,
            password: pass,
            birthyear: age,
            age: age1,
            eligibility: age >= 18 ? "Eligible" : "Not Eligible"
        };
        alert("Student Info in JSON format:\n" + JSON.stringify(student_json, null, 2));
    }
}
else
{
    alert("Wrong Credentials!");
}
