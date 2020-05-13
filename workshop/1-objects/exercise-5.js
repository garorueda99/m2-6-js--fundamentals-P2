// We often deal with "arrays of objects";
// below is an example of an array of objects, where each object represents a person:

const people = [
  { name: { first: "Alyssa", middle: "P.", last: "Hacker" }, age: 26 },
  { name: { first: "Ben", last: "Bitdiddle" }, age: 34 },
  { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 40 },
  { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 45 },
  { name: { first: "Louis", last: "Reasoner" }, age: 21 },
  { name: { first: "Shahan", middle: "Haig", last: "Krakirian" }, age: 21 },
];

// Exercise 5.0
// ------------
// Add the object representing yourself to this array of people (if your
// `name` key does not have the same "shape" as the ones above, make sure you
// change it to look like these).

//-------------------------------------------------

const me = {
  name: { first: "German", middle: "Andres", last: "Rueda" },
  age: 39,
};

people.push(me);

// Exercise 5.1
// ------------
// Write a function that returns the average age of the `people` array.

function avgAge(peopleArr) {
  const reducer = (accumulator, people) => accumulator + people.age;
  const totalYears = peopleArr.reduce(reducer, 0);
  return totalYears / peopleArr.length;
  // Yuor code here
}

console.log(`Average age is ${avgAge(people).toFixed(2)}.`);

//-------------------------------------------------

// Exercise 5.2
// ------------
// Write a function that, when passed an array of *people* (person objects) as
// an argument, returns an array of their full names (each full name is a string).
// Can you make use of your `fullName` function here?

function fullName(peopleArr) {
  // Your code here
  let fullNamesArray = [];
  peopleArr.forEach((element) => {
    fullNamesArray.push(betterFullName(element));
  });
  return fullNamesArray;
}

function betterFullName(person) {
  // Your code here
  // console.log("middle" in person);
  // console.log(rick);
  return !("middle" in person.name)
    ? `${person.name.first} ${person.name.last}`
    : `${person.name.first} ${person.name.middle} ${person.name.last}`;
}

console.log(fullName(people));

//-------------------------------------------------

// Exercise 5.3
// ------------
// Write a function that, when given *people* and an *age* as arguments,
// returns an array of just the people that are older than the specified age..

function olderPeople(peopleArr, age) {
  // Your code here
  const agefilter = (x) => x.age > age;
  const olderthanAge = people.filter(agefilter);
  return olderthanAge;
}

console.log(olderPeople(people, 26));
