// Selecteer alle vuilbak iconen
const trashIcons = document.querySelectorAll(".trashcan");

// Itereer over elk vuilbak icoontje
trashIcons.forEach((trashIcon) => {
    // Voeg een klikgebeurtenisluisteraar toe aan elk vuilbak icoontje
    trashIcon.addEventListener("click", () => {
        // Vind de bovenliggende rij van het verwijderde item
        const row = trashIcon.closest(".row");

        // Verwijder de rij uit de productenlijst
        row.remove();
    });
});
