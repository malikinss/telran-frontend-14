// ./src/models/Book.js

/**
 * Represents a book in the library.
 */
class Book {
	/**
	 * Creates a Book instance.
	 * @param {string} isbn - Unique identifier of the book.
	 * @param {string} title - Title of the book.
	 * @param {string} author - Author of the book.
	 * @param {number|string} year - Year of publishing.
	 */
	constructor(isbn, title, author, year) {
		/** @type {string} */
		this.isbn = isbn;

		/** @type {string} */
		this.title = title;

		/** @type {string} */
		this.author = author;

		/** @type {number} */
		this.year = Number(year);
	}

	/**
	 * Returns a string representation of the book.
	 * @return {string} Formatted book details.
	 */
	toString() {
		return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
	}
}

export default Book;
