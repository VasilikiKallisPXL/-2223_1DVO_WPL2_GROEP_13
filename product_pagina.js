

let kopen = document.querySelectorAll(".btn-item_toevoegen");
const btnWinkelmandje = document.querySelector('.container-mandje-icoon');
const containerMandjeProduct= document.querySelector('.container-cart-products');


btnWinkelmandje.addEventListener('click',() =>{
    containerMandjeProduct.classList.toggle('hidden-mandje')
})


const productenParts = [
    {
        id: 1,
        naam:"Adapter" ,
        afbeelding:"assets/foto_klein_card.png" ,
        beschrijving: "Een simpel maar makkelijke adapter voor universeel gebruik.",
        type:"High-Speed fuses",
        prijs: 66,
        hoeveelheid:1

    },
    {
        id: 2,
        naam:"Charger" ,
        afbeelding:"assets/producten_img/card_foto_product.jpg" ,
        beschrijving: "Een simpel maar makkelijke adapter voor universeel gebruik.",
        type:"Charging plug",
        prijs: 120,
        hoeveelheid:1

    },
    {
        id: 3,
        naam:"Universal controller" ,
        afbeelding:"assets/producten_img/jonas-svidras-e28-krnIVmo-unsplash.jpg" ,
        beschrijving: "Een simpel maar makkelijke adapter voor universeel gebruik.",
        type:"Display",
        prijs: 76.50,
        hoeveelheid:1

    },
    {
        id: 4,
        naam:"Kabel" ,
        afbeelding:"assets/producten_img/juice-p1-FJU3JUwM-unsplash.jpg" ,
        beschrijving: "Een simpel maar makkelijke adapter voor universeel gebruik.",
        type:"Current Transformer",
        prijs: 32.20,
        hoeveelheid:1

    },
    {
        id: 5,
        naam:"USB to serial" ,
        afbeelding:"assets/producten_img/lars-kienle-t8ZOIs1RtyE-unsplash.jpg" ,
        beschrijving: "Een simpel maar makkelijke adapter voor universeel gebruik.",
        type:"Cables",
        prijs: 53.95,
        hoeveelheid:1

    },
    {
        id: 6,
        naam:"AE J1772 Type 1" ,
        afbeelding:"assets/producten_img/possessed-photography-znCLdh5-Srk-unsplash.jpg" ,
        beschrijving: "Een simpel maar makkelijke adapter voor universeel gebruik.",
        type:"Power suply",
        prijs: 35.80,
        hoeveelheid:1

    },
    {
        id: 7,
        naam:"Display-color led" ,
        afbeelding:"assets/producten_img/vishnu-mohanan-IAfNjy3fh6g-unsplash.jpg" ,
        beschrijving: "Een simpel maar makkelijke adapter voor universeel gebruik.",
        type:"Display",
        prijs: 62.95,
        hoeveelheid:1
    },
    {
        id: 8,
        naam:"WiFi kit" ,
        afbeelding:"assets/producten_img/vishnu-mohanan-O68LT-zCYFg-unsplash.jpg" ,
        beschrijving: "Een simpel maar makkelijke adapter voor universeel gebruik.",
        type:"Display",
        prijs: 26.50,
        hoeveelheid:1

    }
];


document.addEventListener('DOMContentLoaded', iTemsToevoegenWinkelmandje);

function iTemsToevoegenWinkelmandje(){
    const winkelmandje = JSON.parse(localStorage.getItem('winkelmandje'));

            if (winkelmandje) {
                winkelmandje.forEach((product) => {
                    const {id, naam, prijs, hoeveelheid} = product;
                    productToevoegen(id, naam, prijs,hoeveelheid);
                });
            }



    kopen.forEach((item,index) =>{
        item.addEventListener('click', function (){
            const { id, naam, prijs, hoeveelheid } = productenParts[index];
            aantalItemsMandje(productenParts[index]);
            totalCost(productenParts[index]);
            productToevoegen(id, naam, prijs, hoeveelheid);
        });
    });
}

function productToevoegen(id, naam, prijs, hoeveelheid){
    const winkelmandje=JSON.parse(localStorage.getItem('winkelmandje'))||[]

    const product ={
        id, naam , prijs, hoeveelheid
    };

    winkelmandje.push(product);
    localStorage.setItem('winkelmandje',JSON.stringify(winkelmandje));


    const productZichtbaarWinkelmandje = document.createElement('div');
    productZichtbaarWinkelmandje.classList.add('product_zichtbaar_winkelmandje');
    const costTotalZichtbaar= document.createElement('div');
    costTotalZichtbaar.classList.add('cost-total-zichtbaar');


    containerMandjeProduct.appendChild(productZichtbaarWinkelmandje);
    costTotalZichtbaar.appendChild(totalTeBetalen);
    containerMandjeProduct.appendChild( costTotalZichtbaar);

    productZichtbaarWinkelmandje.innerHTML =  `
 
                                        <div class="cart-product">
                                            <div class="info-cart-product">
                                                <span class="aantal_items">${product.hoeveelheid}</span>
                                                <p class="naam_product">${product.naam}</p>
                                                <span class="prijs_product">${product.prijs}</span>
                                            </div>
<!--                                           <button class="btn btn-close btn-light"></button>-->
                                        </div>
                     
`;

    costTotalZichtbaar.appendChild(knopNaarWinkelmandjePagina);

}


const knopNaarWinkelmandjePagina = document.createElement('button');
knopNaarWinkelmandjePagina.classList.add('btn_mandje_pagina');
knopNaarWinkelmandjePagina.textContent = 'Naar winkelmandje';


let totalBedrag= localStorage.getItem('totalCost');
const totalTeBetalen= document.createElement('div');
totalTeBetalen.classList.add('total_te_betalen');
totalTeBetalen.innerHTML =  `
                        <div class="cart-total">
                                        <h3>Total:</h3>
                                        <span class="total-cost">€ ${totalBedrag}</span>
                                    </div>          

`;
document.getElementById("btn_mandje_pagina").addEventListener("click", function() {
    window.location.href = "https://www.winkel"; // Reemplaza esta URL por la que deseas utilizar
});

/////////////////
const productenLijstJson= JSON.stringify(productenParts);
localStorage.setItem('productenParts', productenLijstJson);

//


function aantalItemsMandje(productParts){

    let productNummmers = localStorage.getItem('aantalItemsMandje');

productNummmers = parseInt(productNummmers) + 1;

if(productNummmers){
    localStorage.setItem('aantalItemsMandje', productNummmers.toString());
    document.querySelector('.producten_opteller').textContent = productNummmers.toString();
}
else{
    localStorage.setItem('aantalItemsMandje','1');
    document.querySelector('.producten_opteller').textContent = '1';
}

}

function totalCost(productParts){

    let cartCost = localStorage.getItem('totalCost')
    if(cartCost!=null){
        cartCost= parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + productParts.prijs);

    } else{
        localStorage.setItem('totalCost', productParts.prijs.toString());
    }
}


function onLoadAantalItemsMandje(){

     let productNummers = localStorage.getItem('AantalItemsMandje');
    document.querySelector('.producten_opteller').textContent = productNummers;

}

onLoadAantalItemsMandje()








