"use strict";

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
