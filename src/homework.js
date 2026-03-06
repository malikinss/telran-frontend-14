// ./src/homework.js

import Book from "./models/Book.js";
import Library from "./models/Library.js";
import { getInputData } from "./utils/input_handlers.js";

/**
 * Main entry point for the library management system.
 * Continuously prompts the user to enter book data,
 * adds valid books to the library, and prints all books at the end.
 */
function main() {
	const library = new Library();

	let inputData = getInputData();

	while (inputData) {
		const [isbn, title, author, yearStr] = inputData;
		const year = Number(yearStr);

		if (Number.isNaN(year)) {
			console.warn(`Invalid year: ${yearStr}. Skipping this entry.`);
		} else {
			const book = new Book(isbn, title, author, year);
			library.addBook(book);
		}

		inputData = getInputData();
	}

	library.print();
}

main();
