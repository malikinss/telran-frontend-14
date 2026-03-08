# Homework 14 – Library Management Project

## Task Definition

The goal of Homework 14 is to implement a **simple library management system** in JavaScript. The system allows users to:

1. Add new books to the library.
2. Print all books in the library.
3. Search for a book by ISBN.

Each book must have a **unique ISBN** and contain information about its **title, author, and year of publishing**.

---

## 📝 Description

This project implements a **console-based library management system** using modern **JavaScript ES modules**.

The system allows the user to enter book data in a specific format and automatically:

- Validate input
- Create book objects
- Store them in a library collection
- Prevent duplicate ISBNs
- Display the complete list of books

The project follows a **modular architecture** separating:

- **Models** – data structures (`Book`, `Library`)
- **Utilities** – input handling
- **Application logic** – program entry point

Project structure:

```
./src/
├─ homework.js                 # Main entry point
├─ models/
│   ├─ Book.js                 # Book class
│   └─ Library.js              # Library class
├─ utils/
|   └─ input_handlers.js       # Input validation and user interaction
└─ index.html                  # Browser entry point
```

---

## 🎯 Purpose

This homework focuses on practicing:

1. **Object-Oriented Programming**
    - Creating classes (`Book`, `Library`)
    - Encapsulation of data and logic

2. **Data Validation**
    - Ensuring ISBN uniqueness
    - Validating input format
    - Handling incorrect user input

3. **Array Manipulation**
    - Storing books in collections
    - Searching using `findIndex`

4. **Modular JavaScript**
    - Using ES Modules
    - Separating logic into reusable components

---

## 🔍 How It Works

### 1. Book Class

The `Book` class represents a single book with the following properties:

- `isbn`
- `title`
- `author`
- `year`

It also implements a `toString()` method that formats the book information:

```
ISBN: <isbn>, Title: <title>, Author: <author>, Year: <year>
```

---

### 2. Library Class

The `Library` class manages the book collection.

It provides three main operations:

- **addBook(book)**
    - Adds a book only if the ISBN does not already exist.

- **findBook(isbn)**
    - Returns the index of the book or `-1` if not found.

- **print()**
    - Prints all books stored in the library.

---

### 3. Input Handling

The function `getInputData()`:

- Prompts the user to enter data in the format:

```

isbn,title,author,year

```

- Validates that exactly **4 comma-separated values** are provided.
- Allows the user to **exit the input loop by typing `exit`**.
- Re-prompts the user if the input format is incorrect.

---

### 4. Application Flow

1. The program creates a new `Library` instance.
2. The user is prompted to enter book data.
3. Each valid entry creates a new `Book`.
4. The book is added to the library if the ISBN is unique.
5. When the user types **`exit`**, the input process stops.
6. All stored books are printed.

---

## 📜 Output Example

### User Input

```

Enter data in format: isbn,title,author,year. Type 'exit' to exit.
12345,JavaScript Basics,John Doe,2023
67890,Advanced JS,Jane Smith,2021
exit

```

### Console Output

```

Input process terminated.

Total books: 2
Books in the library:
ISBN: 12345, Title: JavaScript Basics, Author: John Doe, Year: 2023
ISBN: 67890, Title: Advanced JS, Author: Jane Smith, Year: 2021

```

---

## 📦 Usage

1. Open `index.html` in a browser.

2. Enter book data in the format:

```

isbn,title,author,year

```

Example:

```

9780134685991,Effective Java,Joshua Bloch,2018

```

3. Type **`exit`** to stop adding books.

4. The program will print the full library to the console.

---

## ✅ Dependencies

No external dependencies are required.

Requirements:

- Modern browser
- ES Module support

---

## 📊 Project Status

**Status:** ✅ Completed

Features implemented:

- Book object with formatted output
- Library collection management
- Unique ISBN validation
- Input validation
- User exit command
- Modular architecture

---

## 📄 License

MIT License

---

## 🧮 Conclusion

This project demonstrates **core JavaScript development concepts**:

- Object-oriented design
- Modular architecture
- Input validation
- Collection management

The library system provides a clean and extensible foundation that could be expanded with features like:

- book removal
- persistent storage
- UI interface
- search functionality

---

Made with ❤️ and `JavaScript` by **Sam-Shepsel Malikin** 🎓
