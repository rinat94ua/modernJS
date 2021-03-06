function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function (fn){
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },

  unsubscrive: function (fn) {
    this.observers = this.observers.filter(function(item){
      if(item !== fn){
        return item;
      }
    });
    console.log(`You are now unscribed from ${fn.name}`); 
  },
  fire: function () {
    this.observers.forEach(item => {
      item.call();
    });
  }
}

const click = new EventObserver();

// EL's
document.querySelector('.sub-ms').addEventListener('click', function () {
  click.subscribe(getCurMS);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
  click.unsubscrive(getCurMS);
});

// Sec
document.querySelector('.sub-s').addEventListener('click', function () {
  click.subscribe(getCurS);
});

document.querySelector('.unsub-s').addEventListener('click', function () {
  click.unsubscrive(getCurS);
});

document.querySelector('.fire').addEventListener('click', function () {
  click.fire();
});


// Click handlers
const getCurMS = function () {
  console.log(`Current ms: ${new Date().getMilliseconds()}`); 
}

const getCurS = function () {
  console.log(`Current sec: ${new Date().getSeconds()}`);
}