// //var, let, const

// // var name = 'John Doe';
// // console.log(name);

// // // multi word vars
// // var firstName = 'John'; //Camel case

// //LET
// let name;
// name = "John Doe";

// // const
// const name = "John";
// console.log(name);
// // name = "asdasd";
// // console.log(name);

// Primitive
// const name = "John Doe";
// const ifMale = true;
// const sym = Symbol();

// //Reference types - Objects
// const hobbies = ['movies', 'music'];
// const address = {
//   city: 'Boston',
//   state: 'MA'
// };
// const day = new Date();
// console.log(day);


//Type conversion

// let val;
// // Number to str
// val = String(5);
// val = String(4+4);
// //Bool to str
// val = String(true);
// // Date to srt
// val = String(new Date());
// //Arr to str
// val = String([1,2,3,4,5]);

// //toString
// val = (5).toString();
// val = (true).toString();

// //String to number
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('null'); //NaN
// val = Number([1,2,3]); //NaN

// val = parseInt('100.30');
// val = parseFloat('100.30');


// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed(1));

// const val1 = String(5);
// const val2 = 6;
// const sum = val1 + val2;

// console.log(sum);
// console.log(typeof sum);


///////////////////////////
// NUMBERS MATH //////////

// const num1 = 100;
// const num2 = 60;
// let val;

// //simple math with numbers
// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math obj
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-64);
// val = Math.pow(-8, 2);
// val = Math.min(2,33,56,7,8,4,3,2,4);
// val = Math.max(2,33,56,7,8,4,3,2,4);
// val = Math.round(Math.random() * 10);

// console.log(val);


///////////////////////////
// STRINGS ///////////////
/*
const firstName = 'William';
const lastName = 'Johnson';
const str = 'hello my name is Rinat';
const tags = 'wedesing, web, form';

let val;
val = firstName + lastName;
val = firstName + ' ' +  lastName;
val = 'Brad ';
val += 'Traversy';


val = firstName.length;
val = firstName.concat(' ', lastName);

val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

val = firstName.charAt('2');

val = firstName.charAt(firstName.length - 1);

val = firstName.substring(0, 4);

//slice()
val = firstName.slice(-3);

val = str.split(' ');
val = tags.split(',');

val = tags.replace('Brad', 'Jack');

val = str.includes('hello');
val = str.includes('Hello');

console.log(val);
*/

// const name = 'John';
// const age = 31;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// html = '<ul> <li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li> </ul>';

// html = `
//         <ul>
//         <li>Name:  ${name} </li>
//         <li>Age:  ${age} </li>
//         <li>Job:  ${job} </li>
//         <li>City:  ${city} </li>
//         <li>City:  ${2+2} </li>
//         <li>City:  ${city.includes('Mi')} </li>
//         <li>City:  ${age >= 30 ? 'Over 30' : 'Under 30'} </li>
//         </ul>`;

// document.body.innerHTML = html;

// console.log(html);

/*
const friut = ['apple', 'banana', 'pineapple'];
const numbers = [1,2,5,8,4,79,53,22];
let val;

val = friut.sort();
val = numbers.sort();

val = numbers.sort(function(x, y){
  return y - x;
});

val = numbers.sort(function (x, y) {
  return x + y;
});

// Find

function over50(num){
  return num > 50;
}
val = numbers.find(over50);

console.log(val);
*/
/*
const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@aol.com',
  hobbies: ['music', 'sport'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthdayYear: function(){
    return 2017 - this.age;
  }
};

let val;
val = person.firstName;
val = person['lastName'];
val = person['age'];
val = person['hobbies'];
val = person['hobbies'][1];
val = person['address']['city'];
val = person['getBirthdayYear']();

console.log(val);

const people = [
  {
    name: 'John', age: 30
  },
  {
    name: 'Mike', age: 36
  },
];

for(let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
*/

/*
let val;
const today = new Date('1/1/2018');
// let birthDay = new Date('9-10-1981 11:25:00');
// let birthDay = new Date('September 10 1981');
let birthDay = new Date('9/10/1981');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthDay.setMonth(2);
birthDay.setDate(2);
birthDay.setFullYear(2022);
birthDay.setHours(3);
birthDay.setMinutes(30);
birthDay.setSeconds(25);

console.log(birthDay);
*/

/*
//////////////////////////////////
//////// FUNCTION DECLARATIONS ///

function greet(name = 'John'){
  // console.log('hello');
  return 'hello ' + name;
}

// console.log(greet());

//////////////////////////////////
//////// FUNCTION EXPRESIONS ////

const square = function(x=0) {
  return x*x;
};

// console.log(square());

///////////////////
//////// IIFE ////
(function(name){
  console.log('asdsad' + name);
}(name));

const todo = {
  add: function(){
    console.log('add todo ...');
  },
  edit: function(id){
    console.log(id);
  }
};

todo.add();
todo.edit(22);
*/

// const user = {
//   name: 'john',
//   age: 30
// };

// for(let x in user) {
//   console.log(user[x]);
// }