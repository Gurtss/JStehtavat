function RollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let last_roll = 0;
const ul = document.getElementById('list');

while (last_roll !== 6){
    const roll = RollDice();
    last_roll = roll;
    const li = document.createElement('li');
    li.innerText = roll;
    ul.appendChild(li);
}