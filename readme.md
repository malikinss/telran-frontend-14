# Homework 14 – Library Management Project

## Task Definition

The goal of Homework 14 is to implement a **simple library management system** in JavaScript. The system allows users to:

1. Add new books to the library.
2. Print all books in the library.
3. Search for a book by ISBN.

Each book must have a **unique ISBN** and contain information about its **title, author, and year of publishing**.

---

## 📝 Description

This project implements a **modular library system** with the following components:

- **Book class** – represents individual books with properties: `isbn`, `title`, `author`, `year`. Includes a `toString()` method for formatted output.
- **Library class** – manages a collection of books. Ensures uniqueness of ISBNs, provides methods to add books, find books by ISBN, and print the library.
- **Input handler** – prompts the user for book data, validates input, and allows graceful exit.

Project structure:

```

./src/
├─ homework.js                 # Main program
├─ models/
│   ├─ Book.js                 # Book class
│   └─ Library.js              # Library class
├─ utils/
│   └─ input_handlers.js       # User input handler
└─ /index.html                 # HTML entry point

```

---

## 🎯 Purpose

The homework focuses on:

1. **Object-oriented programming** – defining Book and Library classes.
2. **Input validation** – ensuring proper format and unique ISBNs.
3. **User interaction** – using prompts to gather book data.
4. **Array management** – adding, searching, and printing book collections.

---

## 🔍 How It Works

1. **Book class**
    - Stores book properties.
    - `toString()` formats book details.

2. **Library class**
    - `addBook(book)` adds a book if ISBN is unique.
    - `findBook(isbn)` returns index or `-1`.
    - `print()` lists all books.

3. **Input Handling**
    - `getInputData()` prompts user for `isbn,title,author,year`.
    - Validates input and trims whitespace.
    - Allows exiting input process by typing `exit` or leaving blank.

4. **Main Program**
    - Loops over user input.
    - Converts year to a number and validates.
    - Adds valid books to the library.
    - Prints all books at the end.

---

## 📜 Output Example

```js
// Example usage in homework.js
const library = new Library();
let input = getInputData();

while (input) {
	const [isbn, title, author, yearStr] = input;
	const year = Number(yearStr);

	if (!Number.isNaN(year)) {
		const book = new Book(isbn, title, author, year);
		library.addBook(book);
	}

	input = getInputData();
}

library.print();
```

Output:

```
Total books: 2
Books in the library:
ISBN: 12345, Title: JavaScript Basics, Author: John Doe, Year: 2023
ISBN: 67890, Title: Advanced JS, Author: Jane Smith, Year: 2021
```

---

## 📦 Usage

1. Open `index.html` in a modern browser with ESM support.
2. Enter book data in the format `isbn,title,author,year`.
3. Type `exit` or leave input blank to finish.
4. The program prints all books in the console.

---

## ✅ Dependencies

- Modern browser with **ESM module support**.
- No external libraries required.

---

## 📊 Project Status

**Status:** ✅ Completed

- Book and Library classes implemented.
- Input validation for correct format and unique ISBNs.
- Books can be added, searched, and printed.
- Graceful handling of invalid input and exit command.

---

## 📄 License

MIT License

---

## 🧮 Conclusion

This project demonstrates **object-oriented JavaScript** with:

- Class-based design for books and library.
- Input validation and user interaction.
- Management of a dynamic collection of objects.

---

Made with ❤️ and `JavaScript` by **Sam-Shepsel Malikin** 🎓
