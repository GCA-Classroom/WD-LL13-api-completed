/*
🧠 Copilot Helper Notes – Please Follow These Guidelines:

This is a beginner-friendly project. Suggestions should:
- Use plain JavaScript (no frameworks, Canvas, or game libraries).
- Use `fetch()` with `.then()` syntax (not async/await unless requested).
- Prefer `const` and `let`, and keep variable/function names clear and descriptive.
- Use `||` and `&&` in conditionals only when needed – clarity first.
- Break logic into small, readable functions when appropriate.
- Avoid advanced ES6+ features (e.g., destructuring, optional chaining) unless scaffolded.
- Avoid arrow functions unless needed for clarity or brevity.
- Add helpful inline comments, especially around tricky logic or new patterns.

This helps students learn to read, debug, and extend code confidently.
*/

/*
Students — No need to worry about this block! 
It’s just here to help Copilot support you better. 
Start your code below 👇
*/

// Target the output area and button
const outputDiv = document.getElementById("output");
const fetchButton = document.getElementById("fetch-btn");

// Create a function to fetch and display data
function getYesNoAnswer() {
  fetch("https://yesno.wtf/api")
    .then(function(response) {
      return response.json(); // Convert response to JSON
    })
    .then(function(data) {
      // Clear the output
      outputDiv.innerHTML = "";

      // Create elements for text and image
      const answerText = document.createElement("p");
      answerText.textContent = "Answer: " + data.answer;

      const answerImage = document.createElement("img");
      answerImage.src = data.image;
      answerImage.alt = "Answer gif";

      // Append elements to the output
      outputDiv.appendChild(answerText);
      outputDiv.appendChild(answerImage);
    })
    .catch(function(error) {
      outputDiv.textContent = "Oops! Something went wrong.";
      console.error(error);
    });
}

// Add event listener to the button
fetchButton.addEventListener("click", getYesNoAnswer);
