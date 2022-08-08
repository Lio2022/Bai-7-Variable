
function Add(){
    let number1=document.getElementById("number1").value;
    let number2=document.getElementById("number2").value;
    number1=parseFloat(number1);
    number2=parseFloat(number2);
    let Result = "Result (+) :" + (number1 + number2);
    document.getElementById("Result").innerHTML = Result;
}
function Sub(){
    let number1=document.getElementById("number1").value;
    let number2=document.getElementById("number2").value;
    let Result = "Result (-):" + (number1 - number2);
    document.getElementById("Result").innerHTML = Result;
}
function Mul(){
    let number1=document.getElementById("number1").value;
    let number2=document.getElementById("number2").value;
    let Result = "Result (*):" + (number1 * number2);
    document.getElementById("Result").innerHTML = Result;
}
function Div(){
    let number1=document.getElementById("number1").value;
    let number2=document.getElementById("number2").value;
    let Result = "Result (/):" + (number1 / number2);
    document.getElementById("Result").innerHTML = Result;
}