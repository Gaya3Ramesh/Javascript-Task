// charAt()
var str="When a JavaScript variable is declared with the keyword 'new', the variable is created as an object";  
document.write("String Method 1: charAt() = " + str.charAt(20));  

document.write("<br>") ;
document.write("<br>") ;

// concat()
var str1 = "Gayathri ";  
var str2 = "Ramesh";  
var str3 = str1+str2;  
document.write("String Method 2: concat() = " +  str3); 

document.write("<br>") ;
document.write("<br>") ;

// indexOf()
var str1 = "When a JavaScript variable is declared with the keyword 'new', the variable is created as an object";  
var result = str1.indexOf("with");  
document.write("String Method 3: indexOf() = " + result);  

document.write("<br>") ;
document.write("<br>") ;

// lastIndexOf()
var str1= "When a JavaScript variable is declared with the keyword 'new', the variable is created as an object";  
var result = str1.lastIndexOf("new");  
document.write("String Method 4: lastIndexOf() = " + result); 

document.write("<br>") ;
document.write("<br>") ;

// toLowerCase()
var str1="When a JavaScript variable is declared with the keyword 'new', the variable is created as an object";  
var str2=str1.toLowerCase();  
document.write("String Method 4: toLowerCase() = " + str2);  

document.write("<br>") ;
document.write("<br>") ;

// toUpperCase()
var str1="When a JavaScript variable is declared with the keyword 'new', the variable is created as an object";  
var str2=str1.toUpperCase();  
document.write("String Method 4: toUpperCase() = " + str2);  

document.write("<br>") ;
document.write("<br>") ;

// slice(beginIndex, endIndex)
var str1="When a JavaScript variable is declared with the keyword 'new', the variable is created as an object";  
var str2=str1.slice(10 , 27);  
document.write("String Method 4: Slice() = " +  str2);  

document.write("<br>") ;
document.write("<br>") ;

// endsWith()
var str1 = "When a JavaScript variable is declared with the keyword 'new', the variable is created as an object";  
var result = str1.endsWith("ct");
document.write("String Method 4: endsWith() = " + result); 

document.write("<br>") ;
document.write("<br>") ;

//fromCharCode()
var str1 = "When a JavaScript variable is declared with the keyword 'new', the variable is created as an object";  
var result = str1.fromCharCode(97);
document.write("String Method 5: fromCharCode() = " + result); 
