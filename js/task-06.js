const textInput = document.querySelector("#validation-input");
const parametru = textInput.getAttribute("data-length");

textInput.addEventListener("blur", () => {
    if (textInput.value.length == parametru) {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
        console.log(`Valid:`,textInput.value.length) //de verificare
    } else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
        console.log(`inValid:`,textInput.value.length) //de verificare  
    }
});