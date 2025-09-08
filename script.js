const myLibrary = [];
const container = document.querySelector(".container");

//=================Book Functions=================
function Book(title, author, pages, read) {
  if (!new.target) {
    throw "Book constructor must be called with new";
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

//=================Base Database=================
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 310, true);
const book2 = new Book("1984", "George Orwell", 328, false);
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 281, true);
const book4 = new Book("Pride and Prejudice", "Jane Austen", 279, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

//=================Display Functions=================
function displayBooks() {
  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = book.title;
    bookCard.appendChild(title);

    const author = document.createElement("h3");
    author.textContent = book.author;
    bookCard.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = book.pages;
    bookCard.appendChild(pages);

    const read = document.createElement("button");
    read.textContent = book.read ? "read" : "Not read";
    bookCard.appendChild(read);

    container.appendChild(bookCard);
  });
}

//================Library Initialization=================
displayBooks();
