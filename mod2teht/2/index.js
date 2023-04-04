let participants = +prompt("How many participants")
let names = [];
let result = "";

for (let i=0; i < participants; i++) {
  let people = prompt("Give name")
  names.push(people);
}

names.sort();

for (const name of names) {
  result += `<li>${name}</li>`;
}
document.getElementById("target").innerHTML = `${result}`