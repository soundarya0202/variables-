
  
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
















































