
let inputPhysicalPoint=prompt("Enter the Physical Point");
let inputChemistryPoint=prompt("Enter the Chemistry Point");
let inputBiologicalPoint=prompt("Enter the BiologicalPoint");
let a = parseFloat(inputPhysicalPoint);
let b = parseFloat(inputChemistryPoint);
let c = parseFloat(inputBiologicalPoint);
let sum=a+b+c;
let average=(a+b+c)/3;
document.write("Average is: " + average +sum);
document.write("<br>")
document.write("Sum is: " + sum)