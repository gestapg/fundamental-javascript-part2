"use strict";

function describeCountry(country, population, capitalCity) {
  const described = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return described;
}

const portugal = describeCountry("Portugal", 8, "Lisbon");
const finland = describeCountry("Finland", 6, "Helsinki");
const indonesia = describeCountry("Indonesia", 270, "Jakarta");

console.log(portugal);
console.log(finland);
console.log(indonesia);
