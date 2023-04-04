const number1 = +prompt("Enter a number");
const number2 = +prompt("Enter a second number");
const number3 = +prompt("Enter a third number");


const sum = number1 + number2 + number3;
const product = number1 * number2 * number3;
const average = sum / 3;

document.getElementById("target").innerHTML = `The sum is ${sum}, The product is ${product}, The average is ${average}`
