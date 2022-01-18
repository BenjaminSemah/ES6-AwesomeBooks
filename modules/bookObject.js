import { titleInput, authorInput } from '../index.js'

export default class BookObject {
  constructor() {
    this.booksArray = localStorage.getItem('bookStorage') ? JSON.parse(localStorage.getItem('bookStorage')) : [];;
  }

  addNewBook = () => {
    const titleTrim = titleInput.value.trim();
    const authorTrim = authorInput.value.trim();
    const bookId = new Date().getTime();
    if (titleTrim !== '' && authorTrim !== '') {
      this.booksArray.push(
        {
          title: titleTrim,
          author: authorTrim,
          id: bookId,
        },
      );
    }
    titleInput.value = '';
    authorInput.value = '';
  }

  removeBook = (btn) => {
    btn.parentNode.remove();
    localStorage.setItem('bookStorage', JSON.stringify(this.booksArray));
  }
}