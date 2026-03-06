# Homework 14 – Library Management Project

## Task Definition

The goal of Homework 14 is to implement a **simple library management system** in JavaScript. The system allows users to:

1. Add new books to the library.
2. Print all books in the library.
3. Search for a book by ISBN.

Each book must have a **unique ISBN** and contain information about its **title, author, and year of publishing**.

---

## 📝 Description

This project implements a **modular library system** with:

- **Book class** – represents individual books.
- **Library class** – manages a collection of books, ensuring unique ISBNs.
- **Input handler** – prompts the user for book data and validates input format.

Project structure:

```

./src/
├─ homework.js                 # Main entry point and demo
├─ models/
│   ├─ Book.js                 # Book class definition
│   └─ Library.js              # Library class definition
└─ utils/
│   └─ input_handlers.js        # User input handling utilities
./index.html                    # HTML entry point

```

---

## 🎯 Purpose

The homework focuses on:

1. **Object-oriented programming** – creating Book and Library classes.
2. **Data validation** – ensuring ISBN uniqueness and correct input format.
3. **User interaction** – continuously prompting the user for book data.
4. **Array manipulation** – searching, adding, and printing collections of objects.

---

## 🔍 How It Works

1. **Book class**
    - Contains properties: `isbn`, `title`, `author`, `year`.
    - `toString()` method formats book details for display.

2. **Library class**
    - Stores books in an array.
    - `addBook(book)` adds a book only if ISBN is unique.
    - `findBook(isbn)` returns the index of a book by ISBN or `-1`.
    - `print()` displays all books in the library.

3. **Input handling**
    - `getInputData()` prompts the user for book data in the format: `isbn,title,author,year`.
    - Validates input and trims whitespace.
    - Recursively asks until valid input is provided.

4. **Main program**
    - Continuously prompts the user to enter book data.
    - Adds valid books to the library.
    - Prints all books at the end.

---

## 📜 Output Example

### ✅ Example Usage

```js
import Book from "./models/Book.js";
import Library from "./models/Library.js";
import { getInputData } from "./utils/input_handlers.js";

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

1. Open `index.html` in a browser.
2. Enter book data in the format: `isbn,title,author,year`.
3. The system will automatically:
    - Add unique books to the library.
    - Skip duplicates and warn the user.
    - Print all books at the end.

---

## ✅ Dependencies

- Modern browser with **ESM module support**.
- No external libraries required.

---

## 📊 Project Status

**Status:** ✅ Completed

- Book and Library classes implemented.
- Input validation ensures correct data and unique ISBNs.
- User interaction via prompt for book data.
- Books can be added, searched, and printed.

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
