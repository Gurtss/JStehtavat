const name = prompt("What is your name?");

let room = null;

const randomClass = Math.floor((Math.random() * 4) + 1);

switch (randomClass) {
    case 1:
        room = "Gryffindor";
        break;
    case 2:
        room = "Slytherin";
        break;
    case 3:
        room = "Hufflepuff";
        break;
    case 4:
        room = "Ravenclaw";

    default:
        break;
}

document.getElementById("target").innerHTML = `${name}, you are ${room}.`;