function myFunction() {
let number1 = document.getElementById("num1").value;
let number2 = document.getElementById("num2").value;
  let num3 = number1 / number2;
  let result = num3.toFixed(2);
  alert("2 decimal point: " + result);

  let roundNum = Math.round(result);

alert("Rounded number is: " + roundNum);
}

