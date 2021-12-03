// HINT: You can delete this console.log after you no longer need it!
console.log('click')

// First, tell us your name
let yourName = 'Kaylee Hernandez' // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function(+=1) {
    // HINT: You can delete this console.log after you no longer need it!
    quantity+=1;
    document.getElementById(quantity-number').textContent = quantity;

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons

let plusButton = document.querySelector.`plus-btn`);
let minusButton = document.querySelector('.minus-btn');

let quantity = 0;

plusButton.addEventListener(`click`, function() {
quantity += 1;
document.getElementById(`quantity-number`).textContent = quantity;
)}

minusButton.addEventListener(`click`, function() {
    if (quantity > 0) {
    quantity  -= 1;
    }
    document.getElementById(`quanity-number`).textContent = quantity;
)}

