let dogs = [];

for (let i = 0; i < 6; i++) {
    const name = prompt("Enter the dog's name");
    dogs.push(name);
}

dogs.sort();
dogs.reverse();

const ul = document.getElementById("list");

for (let i = 0; i < dogs.length; i++) {
    const li = document.createElement("li");
    li.textContent = dogs[i];
    ul.appendChild(li);
}