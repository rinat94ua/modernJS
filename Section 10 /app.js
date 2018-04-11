///////////////////////////
// iterator examp
// function nameIterator(names) {
//   let nexIndex = 0;

//   return {
//     next: function() {
//       return nexIndex < names.length ? 
//         { value: names[nexIndex++], done: false } : { done: true }
//     }
//   }
// }

// // Create an array of names
// const namesArr = ['Jack', 'Jill', 'John'];
// // Init iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());

/////////////////////////////
// Generator Example
// function* sayNames() {
//   yield 'jack';
//   yield 'Jill';
//   yield 'John';
// }

// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);


// ID Creator
// function* createIDs() {
//   let index = 1;
//   while(true) {
//     yield index++;
//   }
// }

// const id = createIDs();

// console.log(id.next().value);
// console.log(id.next().value);


