const myLibrary = [];

function Book(title, author, read, id) {
	this.title = title;
	this.author = author;
	this.read = read;
	this.id = id;
}

function addBookToLibrary(library, title, author) {
	const newBook = new Book(title, author, false, library.length);
	library.push(newBook);
}

function addBookToTable(book) {
	const table = document.querySelector(".book-table");
	const tableRow = document.createElement("tr");
	tableRow.id = book.id;

	const title = document.createElement("td");
	const author = document.createElement("td");
	const read = document.createElement("td");
	const readButton = document.createElement("button");
	const deleteBook = document.createElement("td");
	const deleteBookButton = document.createElement("button");

	title.textContent = book.title;
	title.className = "title";

	author.textContent = book.author;
	author.className = "author";


	if(book.read === true) {
		readButton.textContent = "Read";
	}
	else {
		readButton.textContent = "Not Read";
	}
	read.className = "read";
	readButton.addEventListener("click", function() {
		console.log("clicked");
		book.read = !book.read;
		if(book.read === true) {
			readButton.textContent = "Read";
		}
		else {
			readButton.textContent = "Not Read";
		}
	});

	deleteBookButton.textContent = "Delete";
	deleteBook.className = "delete-book";
	deleteBookButton.addEventListener("click", function() {
		tableRow.remove();
	});

	tableRow.appendChild(title);
	tableRow.appendChild(author);
	read.appendChild(readButton);
	tableRow.appendChild(read);
	deleteBook.appendChild(deleteBookButton);
	tableRow.appendChild(deleteBook);
	table.appendChild(tableRow);
}

function newBookEventListener() {
	const addBookButton = document.querySelector(".add-book-button");
	const titleInput = document.querySelector(".title-input");
	const authorInput = document.querySelector(".author-input");

	addBookButton.addEventListener("click", function() {
		addBookToLibrary(myLibrary, titleInput.value, authorInput.value, false);
		console.log(titleInput.value)
		console.log(authorInput.value)
		addBookToTable(myLibrary[myLibrary.length - 1]);
	});
}

addBookToLibrary(myLibrary, "Harry Potter", "J.K. Rolling", false);
console.log(myLibrary);
for(let i = 0; i < myLibrary.length; i++) {
	addBookToTable(myLibrary[i]);
}
newBookEventListener();