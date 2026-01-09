let display = document.getElementById("display");

let buttons = document.querySelectorAll("button");

let input = "";

// Loop through each button
for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {

        let buttonText = buttons[i].innerText;

        if (buttonText === "C") {
            input = "";
            display.value = "";
        }

        else if (buttonText === "=") {
            try {
                input = eval(input);  
                display.value = input;
            } catch {
                display.value = "Error";
                input = "";
            }
        }

        
        else {
            input = input + buttonText;
            display.value = input;
        }
    });
}
