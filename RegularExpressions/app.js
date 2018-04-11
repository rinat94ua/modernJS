let re;
re = /hello/;
re = /hello/i; // i - case insensitive
// re = /hello/g; // g - global search

// console.log(re);
// console.log(re.source);

// exec() - return result in an array or null
// const result = re.exec('brad hello world');

// console.log(result[0]);
// console.log(result.input);

// test() - returns true of false
// const result = re.test('hello');
// const result = re.test('Hello');

// match() - return result array or null
// const str = 'Hello There';
// const result = str.match(re);

// search() - return index of the first match if not found return - 1
// const str = 'Hello There';
// const result = str.search(re);

// replace() - return a new string with some or all matches
const str = 'Hello There';
const newStr = str.replace(re, 'Hi');

console.log(newStr);
