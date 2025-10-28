const GAMEBOARD = document.getElementById("GAMEBOARD");

/**
 * Alerts the user of invalid input
 * @param {string} value user input
 */
function invalidInput(value) {
    // TODO: replace with modal
    alert(`Invalid input: ${value}`);
}

/**
 * Adds a text input element to the game interface
 * @param {boolean} isArea multi-line input if true, else single-line
 * @param {number} charLimit maximum number of characters allowed
 * @param {Function<string, boolean>} validator function to validate input
 * @returns {Promise<string>} resolves with the user's input
 */
function addTextInput(isArea, charLimit, validator) {
    return new Promise((resolve) => {
        let input = document.createElement(isArea ? "textarea" : "input");
        let enter = document.createElement("button");
        input.maxLength = charLimit;
        enter.textContent = "Enter";
        GAMEBOARD.appendChild(input);
        GAMEBOARD.appendChild(enter);
        enter.addEventListener("click", () => {
            if (validator(input.value)) {
                GAMEBOARD.removeChild(input);
                GAMEBOARD.removeChild(enter);
                resolve(input.value);
            } else {
                invalidInput(input.value);
            }
        });
    });
}