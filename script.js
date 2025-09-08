const myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw "Book constructor must be called with new";
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 310, true);
const book2 = new Book("1984", "George Orwell", 328, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
