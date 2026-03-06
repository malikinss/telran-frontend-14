// ./src/utils/input_handlers.js

const REQUEST = "Enter data in format: isbn,title,author,year";

/**
 * Prompts the user to enter book data and returns it as an array.
 * Validates that the input contains exactly 4 comma-separated values.
 * Recursively asks until valid input is provided.
 * @return {string[]} Array containing [isbn, title, author, year].
 */
function getInputData() {
	const inputData = prompt(REQUEST);

	if (!inputData) {
		console.warn("No input provided. Please try again.");
		return getInputData();
	}

	const parts = inputData.split(",").map((p) => p.trim());

	if (parts.length !== 4) {
		console.warn(`Invalid input format. Please ${REQUEST}`);
		return getInputData();
	}

	return parts;
}

export { getInputData };
