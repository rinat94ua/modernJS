// Book Constructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}


// UI Constructor
function UI(){}

// Add book to list
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');

  // Create tr element
  const row = document.createElement('tr');

  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;

  list.appendChild(row);
}

//Clear fields
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Show alert
UI.prototype.showAlert = function (msg, className) {
  // Create div
  const div = document.createElement('div');
  div.className = `alert ${className}`;

  // Add text
  div.appendChild(document.createTextNode(msg));
  // Get parent
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');

  // Insert alert
  container.insertBefore(div, form);

  // Timeout after 3 sec
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
}

// Delete book item
UI.prototype.deleteBook = function(target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

// Event Listners
document.getElementById('book-form').addEventListener('submit', function (e) {

  // get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI(book);

  if(title === '' || author === '' || isbn === ''){
    // error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Show asuccess
    ui.showAlert('Book Added', 'success');

    // Clear fields
    ui.clearFields();
  }

  e.preventDefault()
});

// Listener for delete
document.querySelector('#book-list').addEventListener('click', function (e) {
  // Instantiate UI
  const ui = new UI();
  console.log(ui);
  

  ui.deleteBook(e.target);
  
  // Show alert
  ui.showAlert('Book removed', 'success');

  e.preventDefault();
});