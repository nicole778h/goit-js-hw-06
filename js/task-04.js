
let counterValue = 0;

const valueSpan = document.getElementById('value');


const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');


incrementButton.addEventListener('click', () => {
    counterValue++; 
    updateCounter(); 
});

decrementButton.addEventListener('click', () => {
    counterValue--; 
    updateCounter(); 
});

function updateCounter() {
    valueSpan.textContent = counterValue; // Actualizăm textul din span cu noua valoare a contorului
}
