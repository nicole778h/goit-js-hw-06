// Matricea cu ingrediente
const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

// Obținem lista de ingrediente
const ingredientsList = document.getElementById('ingredients');

// Iterăm prin fiecare ingredient din matrice
ingredients.forEach(ingredient => {
    // Cream un element <li> pentru ingredient
    const li = document.createElement('li');
  
    li.textContent = ingredient;
  
    li.classList.add('item');
    // Inserăm elementul <li> în lista de ingrediente
    ingredientsList.appendChild(li);
});
