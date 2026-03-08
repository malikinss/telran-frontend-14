// ./src/utils/input_handlers.js

const REQUEST = "Enter data in format: isbn,title,author,year";
const EXIT_COMMAND = "exit";
const MESSAGE = `${REQUEST}. Type '${EXIT_COMMAND}' to exit.`;

/**
 * Prompts the user to enter book data.
 * Validates that the input contains exactly four comma-separated values.
 * Continues prompting until valid input or exit command is provided.
 *
 * @returns {string[] | null} Array containing [isbn, title, author, year]
 * or null if the user chooses to exit.
 */
function getInputData() {
	while (true) {
		const input = prompt(MESSAGE);

		if (!input || input.toLowerCase() === EXIT_COMMAND) {
			console.log("Input process terminated.");
			return null;
		}

		const parts = input.split(",").map((value) => value.trim());

		if (parts.length === 4) {
			return parts;
		}

		console.warn(`Invalid input format. ${MESSAGE}`);
	}
}

export { getInputData };
