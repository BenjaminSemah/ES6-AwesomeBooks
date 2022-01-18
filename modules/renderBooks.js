/* eslint-disable no-unused-vars */

import BookObject from './bookObject.js';

export const newBook = new BookObject();
export const booksContainer = document.querySelector('#booksContainer');

let renderBooks;
export default renderBooks = () => {
  let bookHTML = '';
  newBook.booksArray.forEach((book) => {
    bookHTML
    += `
    <li class="singlebook">
      <div class="book-info">
        <p class="book-title">${book.title}</p>
        <p class="by-word">by</p>
        <p class="book-title">${book.author}</p>
      </div>
      <button id="${book.id}" class="bk-remove-btn" type="button">REMOVE</button>
    </li>
    `;
  });
  booksContainer.innerHTML = bookHTML;
};
