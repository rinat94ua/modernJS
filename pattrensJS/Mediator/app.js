const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function (msg, to) {
    this.chatroom.send(msg, this, to);
  },
  recieve: function (msg, from) {
    console.log(`${from.name} to ${this.name}: ${msg}`);
  }
}

const Chatroom = function () {
  let users = {}; // list of users

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
     send: function(msg, from, to) {
       if (to) {
         // Signle user msg
         to.recieve(msg, from);
       } else {
         // Mass message
         for(key in users){
           
         }
       }
     }
  }
}