const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Scenario: Dividing numbers result in a decimal number
  result.innerText = Math.floor(dividend / divider);
  result.classList.remove("error-message");

  // Scenario: Validation when values are missing
  if (!dividend.trim() || !divider.trim()) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    result.classList.add("error-message");
  }

  // Scenario: An invalid division should log an error in the console
  else if (divider.trim() === "0") {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    result.classList.add("error-message");
    throw new Error (
      "Invalid number provided, cannot use 0"
    );
  }

  // Scenario: Providing anything that is not a number should crash the program
  else if (isNaN(divider) || isNaN(dividend)) {
    const bodyElement = document.body
    bodyElement.classList.add("critical-error")
    bodyElement.textContent = "Something critical went wrong. Please reload the page"

    throw new Error ("Both inputs should be numbers");
  }
});