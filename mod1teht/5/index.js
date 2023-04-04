let  year = +prompt("Give year")
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    document.getElementById("target").innerHTML = `${year} is a leap year`

  }
  else{
        document.getElementById("target").innerHTML = `${year} is not a leap year`

  }


