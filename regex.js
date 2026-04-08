 // testing digits in sting
 let str = "welcome 404";
let digits = /\d/;
console.log(digits.test(str))
// testing
let str1 = "i like javascript";
let word = /javascript/;
console.log(word.test(str1))
//testing 2
let speech = "i am gagan, i am 14 years old,my number is 1298583536";
let d4 = /\d+/g;
console.log(speech.match(d4))