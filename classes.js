const bookSection = document.querySelector('.displayed-books');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const addBook = document.querySelector('.add-book');
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
addBook.addEventListener('click', () => {
  const title = titleInput.value;
  const author = authorInput.value;
  const book = new Book(title, author);
  bookShelt1.addBook(book);
});addBook.addEventListener('click', () => {
  const title = titleInput.value;
  const author = authorInput.value;
  const book = new Book(title, author);
  bookShelt1.addBook(book);
});