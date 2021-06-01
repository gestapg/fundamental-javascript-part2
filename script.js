"use strict";
// use strict
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");

// const interface = "audio";
// const private = 165;
// const if = 238728

// FUNCTION

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

// DECLARATION VS EXPRESSION FUNCTION

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

// ARROW FUNCTION

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

// FUNCTIONS CALLING FUNCTIONS

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

// CODING CHALENGE PART1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Data Test 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

// Data Test 2
const scoreDolphins1 = calcAverage(85, 54, 41);
const scoreKoalas1 = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= avgDolphins * 2) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return `NO TEAM WINS!! Dolphins (${avgDolphins}) vs. Koalas (${avgKoalas})`;
  }
};

const winner1 = checkWinner(scoreDolphins, scoreKoalas);
const winner2 = checkWinner(scoreDolphins1, scoreKoalas1);

console.log(winner1);
console.log(winner2);


// ARRAYS

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1995, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ['bobo', 'nona']

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Excercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);


////// BASIC ARRAY OPERATIONS ///////

const friends = ["Michael", "Steven", "Peter"];

// ADD ELEMENTS
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove Elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven")); // menunjukan index keberapa
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven")); // menunjukan hasil true atau false
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}



////// CODING CHALLENGE PART 2 //////

const calCTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return 0.15 * bill;
  } else {
    return 0.2 * bill;
  }
};

const bills = [125, 555, 44];

const tips = [calCTip(bills[0]), calCTip(bills[1]), calCTip(bills[bills.length - 1])];

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(bills, tips, total);

*/

////// INTRODUCTION TO OBJECT //////

const gestaArray = ["Gesta", "Gemilang", 2037 - 1995, "developer", ["Michael", "Peter", "Steven"]];

const gesta = {
  firstName: "Gesta",
  lastName: "Gemilang",
  age: 2037 - 1995,
  job: "developer",
  friends: ["Michael", "Peter", "Steven"],
};
