"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");

// const interface = "audio";
// const private = 165;
// const if = 238728



function logger() {
  console.log("My name is Gesta");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(4, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");



// declaration function
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1995);

// Function Expression
const calcAge2 = function (birthYear) {
  return 2038 - birthYear;
};
const age2 = calcAge2(1995);

console.log(age1, age2);



// Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1995, "Gesta"));
console.log(yearsUntilRetirement(1996, "Sarah"));



function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

*/

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired!`);
    return -1;
  }

  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1995, "Gesta"));
console.log(yearsUntilRetirement(1950, "Aki Mahir"));
