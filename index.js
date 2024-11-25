const myLibrary = [];

function Book(title, author) {
	this.title = title;
	this.author = author;
}

function addBookToLibrary(title, author) {
	const newBook = new Book(title, author);
	myLibrary.push(newBook);
}

function addBooksToTable(library) {
	const table = document.querySelector(".book-table");
	for (let i = 0; i < library.length; i++) {
		const tableRow = document.createElement("tr");
		const title = document.createElement("td");
		const author = document.createElement("td");
		title.textContent = library[i].title;
		title.className = "title";
		author.textContent = library[i].author;
		author.className = "author";
		tableRow.appendChild(title);
		tableRow.appendChild(author);
		table.appendChild(tableRow);
	}
}

addBookToLibrary("Harry Potter", "J.K. Rolling");
console.log(myLibrary);
addBooksToTable(myLibrary);