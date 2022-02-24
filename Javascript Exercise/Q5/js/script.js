// String
let str1 = "Gayathri";
let str2 = 'Ramesh';

document.write("Data type: STRING = " + str1 + " " + str2);

document.write("<br>") ;
document.write("<br>") ;

// Number
let num1 = 30;
let num2 = 22.3;
let num3 = num1+num2;

document.write("Data type: Number = " + num3)

document.write("<br>") ;
document.write("<br>") ;

// Boolean
let bool1 = 5;
let bool2 = 5;
let bool3 = 6;

document.write("Data type: Boolean = " + (bool1 == bool2) + ", " + (bool1 == bool3));

document.write("<br>") ;
document.write("<br>") ;

// Undefined
let value;
document.write("Data type: Undefined = " + value + " " + typeof value);


document.write("<br>") ;
document.write("<br>") ;

// Object
const person = {
    firstName : "Gayathri",
    lastName  : "Ramesh",
    age     : 23,
    email : "gayathri@gmail.com"
  };
  
  document.write("Data type: Undefined = " +  person.firstName + "'s email id is " + person.email + ".");
  ;