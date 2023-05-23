// Functie om de totale prijs bij te werken
function updateTotalPrice() {
    // Vind de prijs en de hoeveelheid voor het huidige item
    const itemContainer = this.closest('.card-body');
    const priceElement = itemContainer.querySelector('.prijs');
    const quantityInput = itemContainer.querySelector('.quantity-input');

    // Haal de prijs en de hoeveelheid op
    const price = parseFloat(priceElement.dataset.price);
    const quantity = parseInt(quantityInput.value);

    // Bereken de nieuwe totale prijs
    const totalPrice = price * quantity;

    // Update de prijsweergave
    priceElement.innerHTML = `<strong>€${totalPrice.toFixed(2)}</strong>`;
}

// Voeg event listeners toe aan quantity inputs
const quantityInputs = document.querySelectorAll('.quantity-input');
quantityInputs.forEach(input => {
    input.addEventListener('input', updateTotalPrice);
});
