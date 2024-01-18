var s1 = "Hello"; //string // primitive // literal
console.log(typeof s1);
console.log(s1);
var s4 = "Hello";
console.log(s1 === s4);
var s2 = new String("Welcome"); // String // object
console.log(typeof s2);
console.log(s2);
var s3 = new String("Welcome");
console.log(s2 === s3); // reference checking
console.log(s1.charAt(0));
console.log(s2.charAt(0));
var ss = s2.valueOf();
console.log(ss);
console.log(typeof ss);
console.log(s2.valueOf() === s3.valueOf());
