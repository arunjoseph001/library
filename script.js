let books = [
  { title: "Title1", author: "Hero1", pages: "251", read: "Not yet" },
  { title: "Title2", author: "Hero2", pages: "215", read: "Not yet" },
  { title: "Title3", author: "Hero3", pages: "325", read: "Read" },
];

const span = document.querySelector("span");
const submit = document.querySelector("button");
const form = document.querySelector("#popupform");

//look through each object in the books array

function printBooks() {
  books.forEach((myBook) => {
    console.log("The myBook is"+ myBook);
    printBook(myBook);
  });
}
printBooks();

function printBook(book) {
  console.log("The book is "+ book);
  // console.log(`${book[title]} is written by ${book[author]} and has ${book[pages]} and reading status is ${book[read]}`);
  let myDiv = document.createElement("div");
  myDiv.classList.add("book");
  let newBook =
    "<h3>" +
    book.title +
    "</h3><p>" +
    book.author +
    "</p><p>" +
    book.pages +
    "</p><p>" +
    book.read +
    "</p>";
  myDiv.innerHTML = newBook;
  console.log("The newBook is " + newBook);
  console.log("The myDiv is " + myDiv);
  document.querySelector(".container").appendChild(myDiv);
  // document.querySelector('.container').appendChild(document.createElement("div"))
  // for (let key in book) {
  //   console.log(`${key}: ${book[key]}`);
  // }
}
function formSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const bookForm = Object.fromEntries(data.entries());
  //   console.log(bookForm);
  books.push(bookForm);
  printBook(bookForm);
}

form.addEventListener("submit", formSubmit);
