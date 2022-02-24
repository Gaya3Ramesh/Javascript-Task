var value="Red" ;
var colors = ["Blue ", "Green", "Red", "Red", "Orange", "Violet", "Violet", "Violet", "Indigo", "Blue ", "Red", "Blue ", "Blue ",  "Yellow "];
colors = colors.filter(Array => Array !== value) ;
document.write("Removed the value Red Color: " + colors);
