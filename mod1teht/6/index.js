let x = confirm("Count squareroot?")
num = null

if (x === true){
  let num = +prompt("Give a number")

  if (num >= 0 ){
    let result = Math.sqrt(num);
    document.getElementById("target").innerHTML = ` root of ${num} is ${result}`
  }
  else{
        document.getElementById("target").innerHTML = `cannot count a negative number`
  }
}
