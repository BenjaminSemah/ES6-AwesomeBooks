import renderBooks, { newBook, booksContainer } from './modules/renderBooks.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

const addButton = document.querySelector('.add-book-btn');
const dateDiv = document.querySelector('.date-and-time');

const btnList = document.getElementById('list');
const btnAddNew = document.getElementById('add-new');
const btnContact = document.getElementById('contact');

const listbooksContainer = document.querySelector('.all-awesome-container');
const addBookContainer = document.querySelector('.add-book-container');
const contactContainer = document.querySelector('.contact-info');

const dateAndTime = DateTime.now().toHTTP();

dateDiv.innerHTML = dateAndTime;

btnList.addEventListener('click', () => {
  listbooksContainer.style.display = 'block';
  addBookContainer.classList.remove('display-content');
  contactContainer.classList.remove('display-content');
});

btnAddNew.addEventListener('click', () => {
  listbooksContainer.style.display = 'none';
  addBookContainer.classList.add('display-content');
  contactContainer.classList.remove('display-content');
});

btnContact.addEventListener('click', () => {
  listbooksContainer.style.display = 'none';
  addBookContainer.classList.remove('display-content');
  contactContainer.classList.add('display-content');
});

addButton.addEventListener('click', () => {
  newBook.addNewBook();
  localStorage.setItem('bookStorage', JSON.stringify(newBook.booksArray));
  renderBooks();
});

booksContainer.addEventListener('click', (event) => {
  const button = event.target;
  const buttonId = button.id;
  if (buttonId !== '') {
    newBook.booksArray = newBook.booksArray.filter((book) => book.id !== Number(buttonId));
    newBook.removeBook(button);
  }
});

renderBooks();