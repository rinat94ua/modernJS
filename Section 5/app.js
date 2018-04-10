// ////////////////////////
// Person constructors ///
// function Person(name, dob){
//   this.name = name;
//   this.birthday = new Date(dob);

//   this.calcAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);

//   }
// }

// const brad = new Person('brad', '9/10/1981');
// console.log(brad.calcAge());

/////////////////////////////
// Built in CONSTRUCTORS ///

// String
// const name1 = 'Jeff';
// const name2 = new String('Jeff');

// console.log(typeof name2);

// if (name2 === 'Jeff') {
//   console.log('YES');
  
// } else {
//   console.log('NO');
  
// }

// // Number
// const num1 = 5;
// const num2 = new Number(5);

// console.log(typeof num2);

// // Boolean
// const bool1 = true;
// const bool2 = new Boolean(true);


///////////////////////////
// PROTOTYPES ////////////

// Object.prototype
// Person.prototype
// function Person(name, dob) {
//   this.name = name;
//   this.birthday = new Date(dob);

//   // this.calcAge = function(){
//   //   const diff = Date.now() - this.birthday.getTime();
//   //   const ageDate = new Date(diff);
//   //   return Math.abs(ageDate.getUTCFullYear() - 1970);
//   // }
// }

// // Calc age
// Person.prototype.calcAge = function () {
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// // Get full name
// Person.prototype.getName = function () {
//   return `${this.name} ${this.birthday}`;
// }

// // Get Married

// const john = new Person('john', '8/12/90');
// const mary = new Person('mary', 'March 20 1978');

// // console.log(mary);
// console.log(john.calcAge());
// console.log(john.getName());

// Prototype inheritance
// function Person(firstName, lastName){
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// // Greeting
// Person.prototype.greeting = function(){
//   return `Hello there ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('John', 'Doe');

// console.log(person1.greeting());

// // Customer constructor
// function Customer(firstName, lastName, phone, membership){
//   Person.call(this, firstName, lastName);

//   this.phone = phone;
//   this.membership = membership;
// }

// // Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// // Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// // Create customer
// const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standart');

// console.log(customer1);

// // Customer greeting
// Customer.prototype.greeting = function () {
//   return `Hello there ${this.firstName} ${this.lastName} welcome`;
// }

// console.log(customer1.greeting());

///////////////////////////////
// Object Create  ////////////
// const personPrototypes = {
//   greeting: function () {
//     return `Hello there ${this.firstName} ${this.lastName}`
//   },

//   getMarried: function (newLastName) {
//     this.lastName = newLastName;
//   }
// }

// const mary = Object.create(personPrototypes);

// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// mary.getMarried('Thompson');

// console.log(mary.greeting());

// // Another syntax
// const brad = Object.create(personPrototypes, {
//   firstName: {value: 'Brad'},
//   lastName: {value: 'Traversy'},
//   age: {value: 36}
// });

// console.log(brad);
// console.log(brad.greeting());


//////////////////////////
// CLASSES

// class Person {
//   constructor(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   greeting(){
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }

//   static addNUmbers(x, y){
//     return x + y;
//   }
// }

// const mary = new Person('Mary', 'Williams');

// console.log(mary);
// console.log(mary.greeting());
// console.log(Person.addNUmbers(1,2));

/////////////////////////
// SUBCLASSES

// class Person{
//   constructor(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   greeting(){
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }
// }

// const brad = new Person('brad', 'brad');

// class Customer extends Person {
//   constructor(firstName, lastName, phone, membership) {
//     super(firstName, lastName);

//     this.phone = phone;
//     this.membership = membership;
//   }

//   getMembershipCostt(){
//     return 400;
//   }

//   static getMembershipCost(){
//     return 500;
//   }
// }

// const john = new Customer('John', 'Doe', '555-555-5555');

// console.log(john.greeting());
// console.log(john.getMembershipCostt());
// console.log(brad.getMembershipCost());

