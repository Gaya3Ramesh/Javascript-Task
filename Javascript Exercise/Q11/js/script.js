let array = [82, 30, 22, 55, 4, 8, 41];
array.sort(function(a, b){return a-b});
document.write("The Given array in ascending order is: " + array);


document.write("<br>") ;
document.write("<br>") ;
document.write("<br>") ;

let colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Violet", "Violet", "Indigo", "Blue ", "Blue ", "Blue ",  "Yellow "];
let removedDuplicate = [...new Set(colors)];

document.write("Array: [Blue, Green, Red, Orange, Violet, Violet, Violet, Indigo, Blue, Blue, Blue, Yellow]");

document.write("<br>") ;
document.write("<br>") ;

document.write( "After removing the dupicate colors, the new array is: [ " + removedDuplicate + "]");