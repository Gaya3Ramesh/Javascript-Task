function myFunction() {
  for (var x = 0; x <= 15; x++) {

    if (x === 0) {
      // myFunction.push(x);
      document.write(x + " is even" + "<br>");
    } 
    else if (x % 2 === 0) {
      // myFunction.push(x);
      document.write(x + " is even" + "<br>");
    }
    else {
      // myFunction.push(x);
      document.write(x + " is odd" + "<br>");
    }
  }
}
