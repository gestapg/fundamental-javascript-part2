"use strict";
/*
function describeCountry(country, population, capitalCity) {
  const described = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return described;
}

const portugal = describeCountry("Portugal", 8, "Lisbon");
const finland = describeCountry("Finland", 6, "Helsinki");
const indonesia = describeCountry("Indonesia", 270, "Jakarta");

// console.log(portugal);
// console.log(finland);
// console.log(indonesia);

const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}
const chinaPercentage = percentageOfWorld1(1441);
const indonesiaPercentage = percentageOfWorld1(270);
const usaPercentage = percentageOfWorld1(521);

console.log(chinaPercentage, indonesiaPercentage, usaPercentage);

const percentageOfWorld2 = function (population) {
  return (population / worldPopulation) * 100;
};
const portugalPercentage = percentageOfWorld2(8);
const indiaPercentage = percentageOfWorld2(1201);
const afrikaPercentage = percentageOfWorld2(5);

console.log(portugalPercentage, indiaPercentage, afrikaPercentage);

const percentageOfWorld3 = (population) => (population / worldPopulation) * 100;

const italyPerc = percentageOfWorld3(29);
const peruPerc = percentageOfWorld3(55);
const japanPerc = percentageOfWorld3(12);

console.log(italyPerc, peruPerc, japanPerc);

const describePopulation = function (country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world`;
};

console.log(describePopulation("Indonesia", 270));

const populations = [1441, 270, 352, 1201];
console.log(populations.length === 4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld2(populations[1]), percentageOfWorld3(populations[2]), percentageOfWorld1(populations[populations.length - 1])];

console.log(percentages);

const neighbours = ["Malaysia", "Brunei", "Singapore"];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European Country");
}

neighbours[1] = "Timor Leste";
console.log(neighbours);

const myCountry = {
  country: "Indonesia",
  capital: "Jakarta",
  language: "Bahasa",
  population: 270,
  neighbour: ["Malaysia", "Brunei", "Singapore"],

  describe: function () {
    return `${this.country} has ${this.population} million ${this["language"]}-speaking people, ${this.neighbour.length} neighbouring countries and a capital called ${this.capital}.`;
  },

  checkIsland: function () {
    this.isIsland = this.isIsland ? this.neighbour.length !== 0 : this.neighbour.length === 0;
    return this.isIsland;
  },
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry);
/*
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry["language"]}-speaking people, ${myCountry.neighbour.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population = 270 + 2;

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry["language"]}-speaking people, ${myCountry.neighbour.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// const minus = 2;
myCountry["population"] = myCountry.population - 4;

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry["language"]}-speaking people, ${myCountry.neighbour.length} neighbouring countries and a capital called ${myCountry.capital}.`);


for (let voters = 1; voters < 51; voters++) {
  console.log(`Voter number ${voters} is currently voting`);
}
*/
const worldPopulation = 7900;
const populations = [1441, 270, 352, 1201];
const percentages2 = [];

function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

const listOfNeighbours = [["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"]];
for (let i = 0; i < listOfNeighbours.length; i++) for (let y = 0; y < listOfNeighbours[i].length; y++) console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
