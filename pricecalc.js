// Functie om de totaalprijs van de producten te berekenen en bij te werken
function updateTotalPrice() {
    // Selecteer alle prijselementen
    const priceElements = document.querySelectorAll('.prijs');

    let totalPrice = 0;

    // Loop door de prijselementen en voeg de prijzen toe aan de totaalprijs
    priceElements.forEach((element) => {
        const priceText = element.textContent.trim().replace('€', '');
        const price = parseFloat(priceText);

        if (!isNaN(price)) {
            totalPrice += price;
        }
    });

    // Selecteer het element voor de totaalprijs
    const totalElement = document.getElementById('total-price');

    // Werk de totaalprijs bij met het juiste formaat
    totalElement.textContent = '€' + totalPrice.toFixed(2);
}

// Functie om een product te verwijderen
function removeProduct(event) {
    const productElement = event.target.closest('.row');
    productElement.remove();

    updateTotalPrice();
}

// Selecteer alle verwijderknoppen
const removeButtons = document.querySelectorAll('.trashcan');

// Voeg een eventlistener toe aan elke verwijderknop
removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
});

// Roept de updateTotalPrice functie aan wanneer de pagina is geladen
window.addEventListener('load', updateTotalPrice);
