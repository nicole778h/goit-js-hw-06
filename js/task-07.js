const textInput = document.querySelector("#font-size-control");
const textDemo = document.querySelector("#text");

textInput.addEventListener("input", (event) => {
    let fontSizeUpdated= parseFloat(textInput.value)+'px'; 
    textDemo.style.fontSize = fontSizeUpdated;
    // document.getElementById("text").style.fontSize = fontSizeUpdated;//a doua varianta(fara declarea de la linia 2)
    console.log(textInput.value); //de verificare
    console.log(textDemo.style.fontSize); //se vede adaugarea style inline //de verificare
    console.log(textDemo); //de verificare
});