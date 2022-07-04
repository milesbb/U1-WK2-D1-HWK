let firstname = "Miles";
let middlename = "Johan";
let lastname = "Bailey-Brændgaard";
let age = 22;
let today = new Date();
let currentyear = today.getFullYear();
let birthdate = currentyear - age;

console.log("Hello, my name is " + " " + firstname + " " + middlename + " " + lastname + ".");
console.log("I was born in " + birthdate + ".");