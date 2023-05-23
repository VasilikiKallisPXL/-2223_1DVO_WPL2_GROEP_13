// JavaScript-bestand: aantalProducten.js

// Functie om het aantal producten in het winkelmandje te tellen
function telAantalProducten() {
    // Zoek alle elementen met de class 'quantity-input' (de inputvelden van de hoeveelheid)
    var inputElements = document.getElementsByClassName('quantity-input');

    // Tel het aantal inputvelden
    var aantalProducten = inputElements.length;

    // Zoek het element waar het aantal producten moet worden weergegeven
    var aantalProductenElement = document.getElementById('aantal-producten');

    // Update de inhoud van het element met het aantal producten
    aantalProductenElement.textContent = aantalProducten.toString();
}

// Functie om het ID te genereren en toe te voegen aan het element waar het aantal producten wordt weergegeven
function genereerID() {
    // Zoek het element waar het aantal producten moet worden weergegeven
    var aantalProductenElement = document.getElementById('aantal-producten');

    // Genereer een willekeurig ID
    var id = 'aantal-producten-' + Math.floor(Math.random() * 1000);

    // Voeg het gegenereerde ID toe aan het element
    aantalProductenElement.id = id;
}

// Wacht tot de pagina volledig is geladen
window.addEventListener('DOMContentLoaded', function() {
    // Roep de functies aan
    telAantalProducten();
    genereerID();
});

// Event listener voor wijzigingen in de inputvelden
document.addEventListener('input', function(event) {
    // Controleer of het gewijzigde element een inputveld is met de class 'quantity-input'
    if (event.target.classList.contains('quantity-input')) {
        // Roep de functie aan om het aantal producten opnieuw te tellen
        telAantalProducten();
    }
});
