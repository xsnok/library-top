const myLibrary = [];

function Book(title, author) {
	this.title = title;
	this.author = author;
}

function addBookToLibrary(library, title, author) {
	const newBook = new Book(title, author);
	library.push(newBook);
}

function addBookToTable(book) {
	const table = document.querySelector(".book-table");
	const tableRow = document.createElement("tr");
	const title = document.createElement("td");
	const author = document.createElement("td");
	title.textContent = book.title;
	title.className = "title";
	author.textContent = book.author;
	author.className = "author";
	tableRow.appendChild(title);
	tableRow.appendChild(author);
	table.appendChild(tableRow);
}

function newBookEventListener() {
	const addBookButton = document.querySelector(".add-book-button");
	const titleInput = document.querySelector(".title-input");
	const authorInput = document.querySelector(".author-input");

	addBookButton.addEventListener("click", function() {
		addBookToLibrary(myLibrary, titleInput.value, authorInput.value);
		console.log(titleInput.value)
		console.log(authorInput.value)
		addBookToTable(myLibrary[myLibrary.length - 1]);
	});
}

addBookToLibrary(myLibrary, "Harry Potter", "J.K. Rolling");
console.log(myLibrary);
for(let i = 0; i < myLibrary.length; i++) {
	addBookToTable(myLibrary[i]);
}
newBookEventListener();