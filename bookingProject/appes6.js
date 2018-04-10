class Book {
  constructor(title, author, isbn) {
    this.title = title; 
    this.author = author; 
    this.isbn = isbn; 
  }
}

class UI {
  addBookToList(book){
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

  showAlert(msg, className){
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
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
      // Store.removeBook()
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// Local storage class
class Store {
  static getBooks(){
    let books;
    if(localStorage.getItem('books') === null){
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static displayBook(){
    const books = Store.getBooks();

    books.forEach(function (book) {
      const ui = new UI;

      // Add book yo UI
      ui.addBookToList(book);
    });
  }

  static addBook(book){
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn){
    const books = Store.getBooks();

    books.forEach(function (book, index) {
      const ui = new UI;

      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
      
      localStorage.setItem('books', JSON.stringify(books));
    });
  }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBook);

// Event Listners for add book
document.getElementById('book-form').addEventListener('submit', function(e) {

  // get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI(book);

  if (title === '' || author === '' || isbn === '') {
    // error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Add to LS
    Store.addBook(book);

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


  ui.deleteBook(e.target);

  // Remove from LS
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show alert
  ui.showAlert('Book removed', 'success');

  e.preventDefault();
});