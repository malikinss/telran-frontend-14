// ./models/Library.js

import Book from "./Book.js";

/**
 * Represents a library that stores a collection of books.
 */
class Library {
	/**
	 * Creates a Library instance.
	 */
	constructor() {
		/** @type {Book[]} */
		this.books = [];
	}

	/**
	 * Adds a book to the library if it does not already exist.
	 * @param {Book} book - The book to add.
	 * @throws {Error} If the argument is not an instance of Book.
	 */
	addBook(book) {
		if (!(book instanceof Book)) {
			throw new Error(
				"Only instances of Book can be added to the library.",
			);
		}

		if (this.findBook(book.isbn) === -1) {
			this.books.push(book);
		} else {
			console.warn(
				`Book with ISBN ${book.isbn} already exists in the library.`,
			);
		}
	}

	/**
	 * Finds a book in the library by ISBN.
	 * @param {string} isbn - The ISBN of the book to find.
	 * @return {number} Index of the book in the collection, or -1 if not found.
	 */
	findBook(isbn) {
		const comparator = (book) => book.isbn === isbn;
		return this.books.findIndex(comparator);
	}

	/**
	 * Prints all books in the library.
	 */
	print() {
		console.log(`Total books: ${this.books.length}`);
		console.log("Books in the library:");
		this.books.forEach((book) => console.log(book.toString()));
	}
}

export default Library;
