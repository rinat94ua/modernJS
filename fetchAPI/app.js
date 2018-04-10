document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

function getText(e) {
  fetch('test.txt')
    .then( response => response.text())
    .then( data => {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch( err => {
      console.log(err);
    });
};

function getJSON(e) {
  fetch('posts.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let output = '';
      data.forEach(function(post){
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
};

function getExternal(e) {
  fetch('https://api.github.com/users')
    .then(function (response) {
      return response.json();
    })
    .then(function (users) {
      console.log(users);
      let output = '';
      users.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
};