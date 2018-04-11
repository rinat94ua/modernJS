// Destructuring Assignment
// let a, b;
// [a, b] = [100, 200];

// REST pattern
// [a, b, c, ...rest] = [100, 200, 300, 400, 500];

// console.log(a);
// console.log(b);
// console.log(rest);

// ({a, b} = {a:100, b:200, c:300, d:400});
// ({a, b, ...rest} = {a:100, b:200, c:300, d:400});
// console.log(a,b);
// console.log(rest);


// Array Destructuring
// const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;

// console.log(person1);
// console.log(person2);
// console.log(person3);

// Parse array returned from function
// function getPeople() {
//   return ['John', 'Beth', 'Mike'];
// }

// let person1, person2, person3;

// [person1, person2, person3] = getPeople();

// console.log(person1);
// console.log(person2);
// console.log(person3);


// Object Destructuring
// const person = {
//   name: 'John Doe',
//   age: 32,
//   city: 'Miami',
//   gender: 'male',
//   func: function() {
//     console.log('asdsad');
//   }
// }

// Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city;

// New ES6
// const {name, age, city, func} = person;
// console.log(name, age, city);
// func();



//////////////////////////
//// MAPS ///////////////

// maps - key-values pairs

// const map1 = new Map();

// //set keys
// const key1 = 'some str',
//       key2 = {},
//       key3 = function() {};

// // Set map values by key
// map1.set(key1, 'Value of key1');
// map1.set(key2, 'Value of key2');
// map1.set(key3, 'Value of key3');

// // console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// // Count values
// console.log(map1.size);

// // Iterating maps
// for(let [key, value] of map1) {
//   console.log(`${key} = ${value}`);
// }

// // Iterate keys only
// for (let key of map1.keys()) {
//   console.log(key);
// }


//////////////////////////
//// SETS ///////////////
const set1 = new Set();

// Add values to set 
set1.add(100);
set1.add('200');
set1.add({name: 'john doe'});
set1.add(true);
set1.add(100);

//  Get count
console.log(set1.size);

// Chech for values
console.log(set1.has(50 + 50));
console.log(set1.has({name: 'john doe'})); // false