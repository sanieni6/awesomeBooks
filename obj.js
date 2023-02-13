const bookSection = document.querySelector('.displayed-books');
const titleInput = document.querySelector('.title-input');
const authorInput = document.querySelector('.author-input');
const addBook = document.querySelector('.add-book');

const LOCAL_STORAGE_KEY = 'items';

const getItems = () => {
  const savedBooks = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  return savedBooks ? JSON.parse(savedBooks) : [];
};

let books = getItems();

const saveLocalStorage = () => {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(books));
};

const removeBook = (index) => {
  books = books.filter((book, id) => index !== id);
};
// add clases
// funtion create new book
function generate() {
  bookSection.innerHTML = '';
  books.forEach((book) => {
    bookSection.insertAdjacentHTML('beforeend',
      `<div>
            <h2>${book.title}</h2>
            <h4>${book.author}</h4>
            <button class="remove">Remove</button>
            <hr>
        </div>`);
  });
  const remove = Array.from(document.querySelectorAll('.remove'));
  remove.forEach((element, index) => element.addEventListener('click', () => {
    removeBook(index);
    saveLocalStorage();
    generate();
  }));
}

window.onload = generate();

function createBook() {
  const book = {};
  book.title = titleInput.value;
  book.author = authorInput.value;
  books.push(book);
  saveLocalStorage();
  generate();
}

addBook.addEventListener('click', createBook);
