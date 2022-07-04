let firstname = "Miles";
let middlename = "Johan";
let lastname = "Bailey-Brændgaard";
let age = 22;
let today = new Date();
let currentyear = today.getFullYear();
let birthdate = currentyear - age;

console.log("Hello, my name is " + " " + firstname + " " + middlename + " " + lastname + ".");
console.log("I was born in " + birthdate + ".");

let spaghetti = 400;
let guanciale = 250;
let eggyolks = 6;
let cheese = 50;
let pepper = 4;
let carbonara;

console.log("");
console.log("Recipe for Carbonara!");
console.log("");
console.log("Combine " + eggyolks + " egg yolks and " + cheese + "g of Pecorino Romano cheese.");
carbonara = eggyolks + cheese;
console.log("Roast " + pepper + "g of pepper in a pan and add some of it to the cheese and yolk mixture. Set aside the rest.");
carbonara += pepper/2;
console.log("Brown and crisp up the guanciale, cook the pasta to al dente and keep a ladel of the pasta water.");
console.log("Pour this pasta water into a pan with the guanciale and turn on the heat to create the sauce.");
console.log("transfer the pasta to the pan, mix and then add the yolk and cheese mixture whilst stirring rapidly to finish the sauce.")
carbonara += guanciale
carbonara += spaghetti
console.log("And finally finish with the remaining black pepper.")
carbonara += pepper/2
console.log("This creates " + carbonara + "g of Carbonara that serves 4.")