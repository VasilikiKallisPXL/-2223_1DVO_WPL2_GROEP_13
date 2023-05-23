function validateCardNumber(kaartNummer) {
    if (kaartNummer.length !== 16) {
        return false;
    }

    if (kaartNummer.substr(0, 2) !== "BE") {
        return false;
    }

    return true;
}

function validateExpirationDate(expirationDate) {
    let huidigeDatum = new Date();
    let maandVervaldatum = parseInt(expirationDate.substr(0, 2));
    let jaarVervaldatum = parseInt(expirationDate.substr(3));

    if (isNaN(maandVervaldatum) || isNaN(jaarVervaldatum) || maandVervaldatum < 1 || maandVervaldatum > 12 || jaarVervaldatum < huidigeDatum.getFullYear() || (jaarVervaldatum === huidigeDatum.getFullYear() && maandVervaldatum < (huidigeDatum.getMonth() + 1))) {
        return false;
    }

    return true;
}

function geldigCvv(cvv) {
    if (cvv.length !== 3 || isNaN(cvv)) {
        return false;
    }

    return true;
}

function validateCard() {
    let kaartNummerInput = document.getElementById("knummer");
    let vervalDatumInput = document.getElementById("eindd");
    let cvvInput = document.getElementById("cvv");

    let kaartNummer = kaartNummerInput.value.trim();
    let vervalDatum = vervalDatumInput.value.trim();
    let cvv = cvvInput.value.trim();

    // Reset de foutstijl
    kaartNummerInput.style.border = "";
    vervalDatumInput.style.border = "";
    cvvInput.style.border = "";

    if (!validateCardNumber(kaartNummer)) {
        alert("Ongeldig bankkaartnummer!");
        kaartNummerInput.style.border = "2px solid red"; // Rode omkadering
        return false;
    }

    if (!validateExpirationDate(vervalDatum)) {
        alert("Ongeldige vervaldatum!");
        vervalDatumInput.style.border = "2px solid red"; // Rode omkadering
        return false;
    }

    if (!geldigCvv(cvv)) {
        alert("Ongeldig CVV-nummer!");
        cvvInput.style.border = "2px solid red"; // Rode omkadering
        return false;
    }

    return true;
}

