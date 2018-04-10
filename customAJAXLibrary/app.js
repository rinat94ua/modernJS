const http = new easyHTTP;

// Get POSTS
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create data 
const data = {
  title: 'Custom post',
  body: 'This is a custom post'
};

// Create POST
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create PUT
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, put){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(put);
//   }
// });

// Create DELETE
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response){
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});