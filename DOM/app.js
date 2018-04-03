/*
let val;

val = document;
val = document.all;
val = document.all[5];
val = document.all.length;
val = document.head;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArray = Array.from(scripts);

scriptsArray.forEach(function(script){
  console.log(script.getAttribute('src'));
});

console.log(val);
*/

////////////////////////////
/// DOCUMENT SELECTORS ////
/*
// getElementById()

val = document.getElementById('task-title');
val = document.getElementById('task-title').id;

const taskTitle = document.querySelector('#task-title');

taskTitle.style.background = '#333';
taskTitle.style.background = 'white';
taskTitle.style.padding = '5px';

// Change content
taskTitle.innerText = 'Task List';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// querySelector() / all
document.querySelector('.card');
document.querySelector('h5');

document.querySelector('ul li').style.color = 'red';
document.querySelector('li:last-child').style.color = 'green';
document.querySelector('li:nth-child(3)').style.color = 'blue';
document.querySelector('li:nth-child(3)').textContent = 'hello';

document.querySelector('li:nth-child(odd)').style.backgroundColor = '#ccc';
document.querySelector('li:nth-child(even)').style.backgroundColor = '#f4f4f4';


// document.getElementsByClassName
const items = document.getElementsByClassName('collection-item');

items[0].style.color = 'red';
items[3].textContent = 'blue';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

//document.querySelectorAll
const items = document.querySelectorAll('.collection-item');

items.forEach(function(item, index){
  item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.backgroundColor = 'red';
});

for(let i = 0; i < liEven.length; i++) {
  liEven[i].style.backgroundColor = 'blue';
}
*/





////////////////////////
// Traversing DOM /////
/*
let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
// val = list.childNodes;
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get childred elements nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

val = list.children[3].children[0].id;
val = list.children[3].children;

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next siblings
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;


// Get previous siblings
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);

*/


///////////////////////////////
// CREATE ELEMENTS ///////////

// Create element
const li = document.createElement('li');
li.className = 'collection-item';
li.id = 'new-item';
li.setAttribute('title', 'new item');

// Create text node
li.appendChild(document.createTextNode('hello world'));

// Create new link element
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
// Append link into li
li.appendChild(link);


// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);