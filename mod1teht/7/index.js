let dice = +prompt("how many times do you want to roll");
let total = 0;

for (let i=0; i < dice; i++) {
  total += Math.floor((Math.random() * 6) + 1);
}

  document.getElementById("target").innerHTML = `your total is ${total}`;
