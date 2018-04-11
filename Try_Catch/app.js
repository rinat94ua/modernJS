const user = {
  email: 'jd@gmail.com'
}

try {
  // Produce a referenceError
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Produce a SyntaxError
  // (eval('asdasd asdsa'));

  // Produce URIError
  // decodeURIComponent('%');

  if(!user.name) {
    // throw 'user has no name';
    throw new SyntaxError('user has no name');
  }
} catch(e) {
  console.log(`User Error: ${e.message}`);
  
  // console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof TypeError);
} finally {
  console.log('Finally runs regardless of results');
}

console.log('programm continues...');
