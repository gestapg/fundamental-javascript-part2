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


////// INTRODUCTION TO OBJECT //////

const gestaArray = ["Gesta", "Gemilang", 2037 - 1995, "developer", ["Michael", "Peter", "Steven"]];

const gesta = {
  firstName: "Gesta",
  lastName: "Gemilang",
  age: 2037 - 1995,
  job: "developer",
  friends: ["Michael", "Peter", "Steven"],
};
 


/////// DOT. vs Bracket notation ///////////

const gesta = {
  firstName: "Gesta",
  lastName: "Gemilang",
  age: 2037 - 1995,
  job: "developer",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(gesta);

console.log(gesta.lastName);
console.log(gesta["lastName"]);

const nameKey = "Name";
console.log(gesta["first" + nameKey]);
console.log(gesta["last" + nameKey]);

const interestedIn = prompt("What do you want to know about Gesta? Choose between firstName, lastName, age, job, and friends");

if (gesta[interestedIn]) {
  console.log(gesta[interestedIn]);
} else {
  console.log("Wrong request! Choose between firstName, lastName, age, job, and friends");
}

gesta.location = "Indonesia";
gesta["twitter"] = "@gesta";
console.log(gesta);

// Challenge
//'Gesta has 3 friends, and his bestfriend is called Michael'

console.log(`${gesta.firstName} has ${gesta.friends.length} friends, and his bestfriend is called ${gesta.friends[0]}`);



///// OBJECT METHODS //////

const gesta = {
  firstName: "Gesta",
  lastName: "Gemilang",
  birthYear: 1995,
  job: "developer",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and ${this.hasDriversLicense ? "he has a driver's License" : "he does not have a driver's License"}`;
  },
};

console.log(gesta.calcAge());

console.log(gesta.age);
console.log(gesta.age);
console.log(gesta.age);

console.log(gesta.getSummary());



/////// CODING CHALLENGE ////////

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(mark.calcBMI(), john.calcBMI());

mark.bmi > john.bmi ? console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`) : console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);




/////// ITERATION : THE FOR LOOP ////////

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 1');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}


//////// LOOPING ARRAYS, BREAKING & CONTINUING ///////

const gestaArray = ["Gesta", "Gemilang", 2037 - 1995, "developer", ["Michael", "Peter", "Steven"], true];

const types = [];

for (let i = 0; i < gestaArray.length; i++) {
  // reading from gesta array
  console.log(gestaArray[i], typeof gestaArray[i]);

  // filling types array
  // types[i] = typeof gestaArray[i];
  types.push(typeof gestaArray[i]);
}

console.log(types);

const years = [1995, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log("---ONLY STRING---");
for (let i = 0; i < gestaArray.length; i++) {
  if (typeof gestaArray[i] !== "string") continue;

  console.log(gestaArray[i], typeof gestaArray[i]);
}

console.log("---BREAK WITH NUMBER---");
for (let i = 0; i < gestaArray.length; i++) {
  if (typeof gestaArray[i] === "number") break;

  console.log(gestaArray[i], typeof gestaArray[i]);
}


/////// LOOPING BACKWARDS AND LOOP IN LOOPS /////

const gestaArray = ["Gesta", "Gemilang", 2037 - 1995, "developer", ["Michael", "Peter", "Steven"], true];

// 0,1,...,4
//

for (let i = gestaArray.length - 1; i >= 0; i--) {
  const element = gestaArray[i];
  console.log(i, element);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------- starting excercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Excercise ${exercise}: lifting weight repetition ${rep}`);
  }
}



// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
  console.log(`while : Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`loop is end...`);
  }
}

*/

/////////// code challenge //////////////

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const calCTip = function (bills) {
  if (bills >= 50 && bills <= 300) {
    return 0.15 * bills;
  } else {
    return 0.2 * bills;
  }
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calCTip(bills[i]));
  total.push(tips[i] + bills[i]);
}

console.log(tips);
console.log(total);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(total));
console.log(calcAverage(tips));
