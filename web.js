const listButton = document.querySelector('#list');
const addButton = document.querySelector('#new');
const contactButton = document.querySelector('#contact');
const listSection = document.querySelector('.displayed-books');
const addSection = document.querySelector('.book-form');
const contactSection = document.querySelector('.contact-info');
const sectionTitle = document.querySelector('#title-books');

const defaultTry = () => {
  addSection.classList.add('hidden');
  contactSection.classList.add('hidden');
  listButton.style.color = '#0000FF';
};
function showList() {
  addSection.classList.add('hidden');
  contactSection.classList.add('hidden');
  listSection.classList.add('display');
  listSection.classList.remove('hidden');
  sectionTitle.classList.remove('hidden');
}

function showForm() {
  listSection.classList.add('hidden');
  addSection.classList.remove('hidden');
  contactSection.classList.add('hidden');
  sectionTitle.classList.add('hidden');
}

function showContact() {
  listSection.classList.add('hidden');
  addSection.classList.add('hidden');
  contactSection.classList.remove('hidden');
  sectionTitle.classList.add('hidden');
}

window.onload = defaultTry;

listButton.addEventListener('click', showList);
addButton.addEventListener('click', showForm);
contactButton.addEventListener('click', showContact);