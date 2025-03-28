let name = document.getElementById("input_name");
let h1_name = document.getElementById("name");

function myFunction()
{
    let name =document.getElementById("input_name");
    let surname = document.getElementById("input_surname");
    let h1_name = document.getElementById("name");
    let age=document.getElementById("input_age");
    h1_name.innerText ="hELLO, "+ name.value + "" + surname.v
    alert(name.value + "is " + age.value + "y.o.");

if(name.value== "" ||  name.value.match(/[A-z]/))
{
    alert("Error: incorecct name!");
}
else
{
    alert(name.value);
}



if (age.value<=0)
{
    alert("Erorr: inccorect age!");
}
else
{
    alert (name.value + "is" + age.value +"y.o.");
}

let table =




}