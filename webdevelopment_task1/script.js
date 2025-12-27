// Get the display input box
let display = document.getElementById("display");

// Get all buttons
let buttons = document.querySelectorAll("button");

// Empty string to store user input
let input = "";

// Loop through each button
for (let i = 0; i < buttons.length; i++) {

    // Add click event to each button
    buttons[i].addEventListener("click", function () {

        let buttonText = buttons[i].innerText;

        // If button is C → clear display
        if (buttonText === "C") {
            input = "";
            display.value = "";
        }

        // If button is = → calculate result
        else if (buttonText === "=") {
            try {
                input = eval(input);   // evaluate expression
                display.value = input;
            } catch {
                display.value = "Error";
                input = "";
            }
        }

        // For numbers and operators
        else {
            input = input + buttonText;
            display.value = input;
        }
    });
}
