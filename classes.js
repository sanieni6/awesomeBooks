/* eslint-disable max-classes-per-file */
const bookSection = document.querySelector('.displayed-books');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const form = document.getElementById('forma');
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
class BookShelf {
  constructor() {
    this.books = [];
    this.loadBooks();
  }

  addBook(book) {
    this.books.push(book);
    this.saveBooks();
  }

  removeBook(book) {
    this.books = this.books.filter((item, index) => index !== book);
    this.saveBooks();
  }

  saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
    this.loadBooks();
  }

  loadBooks() {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    this.books = books.map((item) => new Book(item.title, item.author));
    bookSection.innerHTML = '';
    this.books.forEach((book) => {
      bookSection.insertAdjacentHTML('beforeend',
        `<div class="each-book">
            <div class="middle-section">
              <h2 class="book-title">"${book.title}" by ${book.author}</h2>
            </div>
            <button class="remove">Remove</button>
        </div>`);
    });
    const remove = Array.from(document.querySelectorAll('.remove'));
    remove.forEach((element, index) => element.addEventListener('click', () => {
      this.removeBook(index);
    }));
  }
}

const bookShelt1 = new BookShelf();
form.addEventListener('submit', (event) => {
  const title = titleInput.value;
  const author = authorInput.value;
  const book = new Book(title, author);
  bookShelt1.addBook(book);
  titleInput.value = '';
  authorInput.value = '';
  event.preventDefault();
});