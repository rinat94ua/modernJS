// Basic structure

// (function(){
//   // Declare private vars and function

//   return {
//     // Declare public vars and functions
//   }
// })();

// Standart module pettern
// const UICtrl = (function(){
//   let text = 'Hello world';

//   const changeText = function(){
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangeText: function() {
//       changeText();
//       console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();


/////// REVEAling module pattern
const ItemCtrl = (function(){
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item added....');
  }

  function get(id){
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({id:1, name:'John'});