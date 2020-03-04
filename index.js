
  
//primitive - string , number, boolean, symbol
// reference- object,(arrays)
// spl values-null(obj),undefined,not null(NaN)
let m='soundarya';
//length of string as op-9
console.log(m.length)
//output=8
var str1 = "G";
var str2 = "soundarya";
var name = str1.concat(str2);
console.log(name)
//concat res = Gsoundarya
console.log(str2.endsWith("arya"))
//endsWith res= true
console.log(str1.includes("arya"))
//includes res= false
console.log(str2.lastIndexOf("arya"))
//lastindex val is 8
console.log(str2.repeat(4))
// string repeated as per  the given number op-soundaryasoundaryasoundaryasoundarya
console.log(str2.replace("a","aaa"))
//replacing string value soundkrish
//op-soundaaarya
console.log(str2.search("a"))
//returns the position of a as 5
var sl=str2.slice(0,4);
console.log(sl)
//returns the sliced value soun
var sp=str2.split("a")
console.log(sp)
//string split to g
console.log(str2.startsWith("sound"))
// true - string starts with sound
console.log(str2.substr(0,2))
//returns so based on the substr values 
console.log(str2.substring(0,3))
//returns sou based on the substring values
console.log(str2.toLowerCase())
//sri -lowercase
console.log(str2.toUpperCase())
//SRI - uppercase
var h="   soundarya";
console.log(h.trim())
//trims the space in string var h
//returns a string representing a number in fixed-point notation.
//output1.5
let x=1.456;
console.log(x.toFixed(1));
//Returns a string containing a number represented in exponential notation.
//op 1.4560e+0
console.log(x.toExponential(4))
//to convert into string
//op 1.456
console.log(x.toString())
//outputs informational message to console
//op:soundarya

//GLOBAL METHODS

console.info("soundarya")
//otputs a warning message to console
//op:danger
console.warn("danger")
//outputs a error message
//op:error
console.error("error")
//outputs a message to console
//op print
console.log("print")
//outputs a table to console
console.table(["one","two","three"])
//outputs a alert message to the screen
//alert("hello")

//displays a dialog box 
//  var p = prompt("Please enter your name");

//displays a dialog box with a specified message
//confirm("hello")

//to convert data type to number
//op null
console.log(Number(str1))

//returns true if variable is null
//op true
console.log(isNaN(str1))

//Converts a string to a floating-point number.
//op 10.456
var y=("10.456")
console.log(parseFloat(y))

//Converts a string to an integer.
//op-12
var s=("12")
console.log(parseInt(s))
//coverts a integer to a string
//op-1
var n=1
console.log(String(n))
//returns true if it is boolean
//op:true
console.log(Boolean(n))







































