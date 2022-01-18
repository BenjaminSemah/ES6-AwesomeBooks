import { newBook } from "../index.js"

export default function renderBooks() {
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
}