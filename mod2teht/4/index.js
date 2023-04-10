let numbers = [];
let currentNumber = 1;

while (currentNumber !== 0) {
    currentNumber = Number(prompt('Enter a number:'));
    numbers.push(currentNumber);
}

numbers.sort((a, b) => b - a);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}