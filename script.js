const myLibrary = [];
//=================DOM Elements=================
const container = document.querySelector(".container");
const dialog = document.querySelector("dialog");
const newBookBtn = document.querySelector(".newBook");
const submitBtn = document.querySelector(".submit");
let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let read = document.getElementById("read");

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

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

//=================Initial Database=================
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 310, true);
const book2 = new Book("1984", "George Orwell", 328, false);
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 281, true);
const book4 = new Book("Pride and Prejudice", "Jane Austen", 279, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

//=================Display=================
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
    pages.textContent = `Pages: ${book.pages}`;
    bookCard.appendChild(pages);

    const bookBtns = document.createElement("div");
    bookBtns.classList.add("book-btns");
    bookCard.appendChild(bookBtns);

    //============Read Book========================
    const readBtn = document.createElement("button");
    readBtn.textContent = book.read ? "Read" : "Not Read";
    readBtn.classList.add("function-btn");
    readBtn.classList.add(book.read ? "btn-read" : "btn-not-read");
    bookBtns.appendChild(readBtn);

    readBtn.addEventListener("click", () => {
      book.toggleRead();
      readBtn.classList.remove("btn-read", "btn-not-read");
      readBtn.classList.add(book.read ? "btn-read" : "btn-not-read");
      readBtn.textContent = book.read ? "Read" : "Not Read";
    });

    //=================Delete Book=================
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("function-btn");
    bookBtns.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
      const index = myLibrary.findIndex((thisBook) => thisBook.id === book.id);
      if (index !== -1) {
        myLibrary.splice(index, 1);
        container.removeChild(bookCard);
      }
    });

    container.appendChild(bookCard);
  });
}

//================Add New Book===========================
function clearForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;
}

newBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  container.innerHTML = "";
  title = title.value;
  author = author.value;
  pages = pages.value;
  read = read.checked;

  if (title === "" || author === "" || pages === "") {
    alert("Please fill in all fields.");
    return;
  }

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);
  displayBooks();
  dialog.close();
  clearForm();
});

//================Library Initialization=================
displayBooks();
