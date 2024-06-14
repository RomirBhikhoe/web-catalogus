const emailInput = document.querySelector(".email");
const questionInput = document.querySelector(".vraag");
const submitButton = document.getElementById("submit");

// Function to enable/disable the submit button based on inputs' validity
function checkInputs() {
    if (emailInput.validity.valid && questionInput.validity.valid) {
        submitButton.disabled = false; // Enable the button if both inputs are valid
    } else {
        submitButton.disabled = true; // Disable the button if any input is invalid
    }
}

// Add event listeners to inputs for checking validity on input change
emailInput.addEventListener("input", checkInputs);
questionInput.addEventListener("input", checkInputs);

function changeText() {
    const email = document.querySelector(".email")
    const question = document.querySelector(".vraag")
    let welcome = "bedankt, " + email.value + " " +"we nemen zo snel mogelijk contact met u op";
   
    const main = document.querySelector(".main")
    main.innerHTML = welcome;
}
