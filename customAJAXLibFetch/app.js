const http = new EasyHTTP;

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// Create Data User
const user = {
  name: 'Jonh Doe',
  username: 'sadsad',
  email: 'asdasd@gmail.com'
};

// Post user
// http.post('https://jsonplaceholder.typicode.com/users', user)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// Put user
http.put('https://jsonplaceholder.typicode.com/users/2', user)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Delete user
http.detele('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));