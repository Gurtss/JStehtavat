function RollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

let last_roll = 0;
const ul = document.getElementById('list');
const sides = Number(prompt('How many sides should the dice have?'));

while (last_roll !== sides){
    const roll = RollDice(sides);
    last_roll = roll;
    const li = document.createElement('li');
    li.innerText = roll;
    ul.appendChild(li);
}