import BookObject from './modules/bookObject.js'
import renderBooks from './modules/renderBooks.js';

export let newBook = new BookObject()
export const titleInput = document.querySelector('.bk-title-input');
export const authorInput = document.querySelector('.bk-author-input');
const booksContainer = document.querySelector('#booksContainer');
const addButton = document.querySelector('.add-book-btn');

const btnList = document.getElementById('list');
const btnAddNew = document.getElementById('add-new');
const btnContact = document.getElementById('contact');

const listbooksContainer = document.querySelector('.all-awesome-container');
const addBookContainer = document.querySelector('.add-book-container');
const contactContainer = document.querySelector('.contact-info');

btnList.addEventListener('click', () => {
  listbooksContainer.style.display = 'block';
  addBookContainer.classList.remove('display-content');
  contactContainer.classList.remove('display-content');
})

btnAddNew.addEventListener('click', () => {
  listbooksContainer.style.display = 'none';
  addBookContainer.classList.add('display-content');
  contactContainer.classList.remove('display-content');
})

btnContact.addEventListener('click', () => {
  listbooksContainer.style.display = 'none';
  addBookContainer.classList.remove('display-content');
  contactContainer.classList.add('display-content');
})

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