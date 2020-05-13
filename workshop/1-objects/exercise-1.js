// Exercise 1.0
// ------------
// Create an object that represents *you*.
// It should contain your first name, last name, age and hometown.

// It should look something like this
// let myObject = {
//     name: {
//         first: 'Scott',
//         last: 'Morin',
//     },
//     age: '49',
//     city: 'Montreal',
//     siblings: 1,
//     petName: 'Mia',
//     monthOfBirth: 'July'
// }

let meObject = {
  name: {
    first: "German",
    middle: "Andres",
    last: "Rueda",
  },
  age: "39",
  city: "Laval",
};

// A) console.log() your object.

console.log(meObject);
// B) console.log() a few of the values in the object.
console.log(`Please call me ${meObject.name.middle}`);
console.log(`I'm ${meObject.age} years`);
console.log(`I live at ${meObject.city}`);
//-------------------------------------------------

// Exercise A
// ------------
// Add three more key/value pairs to your object that represent other attributes
// of yourself. Ideas include (but are not limited to):
//     - Favorite TV Shows/Movies/Sports/Activities etc.
//     - Occupation
//     - Date of Birth
//     - Pets (number of pets, names of pets, etc.)

// HINT: You can just modify the object that you created before.

//-------------------------------------------------

meObject.nas = "###-###-###";
meObject.favoriteSongs = [
  "Take a look around",
  "Satisfaction",
  "Sympathy For The Devil",
  "Paint It Black",
];
meObject.pcGames = [
  "Total War",
  "Diablo",
  "StarCraft",
  "Syndicate",
  "Command & Conquer",
];

console.log(meObject);
// Exercise B
// ------------
// Look up your favorite movie on IMDB, and make an object that represents some
// aspects of that movie, *e.g.*:
//     - Title
//     - Director
//     - Year released
//     - Rating
//     - Actors

// HINT: Most movies have multiple actors. What data-structure do we use to
// represent a collection of similar things?

let favoriteMovie = {
  title: "Good Will Hunting",
  genre: "Drama",
  director: "Gus Van Sant",
  writers: ["Ben Affleck", "Matt Damon", "Gus Van Sant"],
  runtime: 126,
  studi0: "Miramax Films",
  tomatemeter: "97%",
};

console.log(favoriteMovie);

//-------------------------------------------------

// Exercise C
// ------------
// Fix the attempts to access values in the `person` object:

const key = "name";
const person = {
  name: "Alyssa P. Hacker",
  age: 26,
  hometown: "somewhere",
};

person["age"]; // => 26
person[key]; // => "Alyssa P. Hacker"

//-------------------------------------------------

// Exercise D
// ------------
// Write a function `fullName` that takes a person object as an argument, and
// returns that person's full name as a string. By *person object*, we mean an
// object that has the structure of the object you created to represent
// yourself above.

// Example
const alyssa = {
  name: {
    first: "Alyssa",
    middle: "P.",
    last: "Hacker",
  },
  age: 26,
};

function fullName(person) {
  // Your code here
  return `${person.name.first} ${person.name.middle} ${person.name.last}`;
}

console.log(fullName(alyssa)); // => "Alyssa P. Hacker"

// Exercise E
// ------------
// What happens if you pass a person object to `fullName` that doesn't have a
// middle name? It's likely that you'd get a double space: "Alyssa  Hacker"

// Your `fullName` function should work correctly regardless of whether or not
// the person has a middle name -- if it doesn't produce the output shown above
// when given the object `{name: {first: "John", last: "Doe"}}`, fix it so that
// it does.

const rick = {
  name: {
    first: "Rick",
    last: "Sanchez",
  },
  age: 66,
};

function betterFullName(person) {
  // Your code here
  // console.log("middle" in person);
  // console.log(rick);
  return !("middle" in person.name)
    ? `${person.name.first} ${person.name.last}`
    : `${person.name.first} ${person.name.middle} ${person.name.last}`;
}

console.log(betterFullName(rick)); // => "Rick Sanchez"
