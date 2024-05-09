# DJS02 : Whole Number Divider

## Project Overview

This project focuses on enhancing a web-based Whole Number Divider application. It helped me, as a student, to apply my knowledge of error handling, guided by specific user stories. Using the Gherkin syntax, a crucial tool for understanding user stories and requirements, the solution meets all user stories listed below. 

It is a basic form for inputting two numbers (dividend and divider) and a button to perform the calculation. It captures form submissions and displays the division result with validation. The application handles errors gracefully, providing clear feedback to the user without crashing, and the logic meets all user stories.


<h2 style="color:#e67e22">Resolved Stories</h2>

### Scenario: Starting program state

- GIVEN that the submit button has not been pressed yet
- AND the code has just loaded
- THEN “NO calculation performed” should be displayed at the bottom

### Scenario: Dividing numbers result in a whole number

- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND 10 is entered into the second input
- THEN 2 should be displayed at the bottom

### Scenario: Dividing numbers result in a decimal number

- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND 3 is entered into the second input
- THEN the number 6 with no decimal should be shown
 

### Scenario: Validation when values are missing

- GIVEN that the submit button is pressed
- WHEN either or both inputs are empty
- THEN the divisions should not be done
- AND the following should be displayed: “Division not performed. Both values are required in inputs. Try again”.
 

### Scenario: An invalid division should log an error in the console

- GIVEN that the submit button is pressed
- WHEN 20 is entered into the first input
- AND 0 is entered into the second input
- THEN the division should not be done
- AND the following should be displayed: “Division not performed. Invalid number provided. Try again”.
- AND an error should be logged in the browser console that shows the call stack
- BUT the program should not crash entirely
 

### Scenario: Providing anything that is not a number should crash the program

- GIVEN that the submit button is pressed
- WHEN ‘YOLO’ is entered into the first input
- AND ‘+++’ is entered into the second input
- THEN the entire screen should be replaced with “Something critical went wrong. Please reload the page
- AND an error should be logged in the browser console that shows the call stack.

### Project Outcome

![alt text] (Solution.png)

1. **Initial State**: On page load, the message “No calculation performed” is displayed, indicating no action has been taken yet.
2. **Whole Number Division**: Upon submitting two numbers that divide evenly (e.g., 20 divided by 10), the application correctly displays the whole number result.
3. **Decimal Number Division**: Upon submitting two numbers that divide unevenly (e.g., 20 divided ny 3), the application correctly displays the rounded down whole number result.
4. **Values Missing**: Upon submitting empty inputs, the application displays a message.
5. **Invalid Division**: Upon submitting two numbers, the divider being 0, the application displays a message and logs an error to the console.
6. **Not a number**: Upon submitting anything thats not a number for both inputs, the application crashes.

### Resources

[the Gherkin syntax](https://docs.behat.org/en/v2.5/guides/1.gherkin.html). 
[Cucumber](https://cucumber.io/docs/gherkin/reference/).