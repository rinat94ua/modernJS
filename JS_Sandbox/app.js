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

