let winkelmandje = document.querySelectorAll(".btn-item_toevoegen");

const  productenLijstParts = document.querySelector("#producten_container_parts");
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
        inWinkelmandje:0

    },
    {
        id: 2,
        naam:"Charger" ,
        afbeelding:"assets/producten_img/card_foto_product.jpg" ,
        beschrijving: "Een simpel maar makkelijke adapter voor universeel gebruik.",
        type:"Charging plug",
        prijs: 120,
        inWinkelmandje:0

    },
    {
        id: 3,
        naam:"Universal controller" ,
        afbeelding:"assets/producten_img/jonas-svidras-e28-krnIVmo-unsplash.jpg" ,
        beschrijving: "Een simpel maar makkelijke adapter voor universeel gebruik.",
        type:"Display",
        prijs: 76.50,
        inWinkelmandje:0

    },
    {
        id: 4,
        naam:"Kabel" ,
        afbeelding:"assets/producten_img/juice-p1-FJU3JUwM-unsplash.jpg" ,
        beschrijving: "Een simpel maar makkelijke adapter voor universeel gebruik.",
        type:"Current Transformer",
        prijs: 32.20,
        inWinkelmandje:0

    },
    {
        id: 5,
        naam:"USB to serial" ,
        afbeelding:"assets/producten_img/lars-kienle-t8ZOIs1RtyE-unsplash.jpg" ,
        beschrijving: "Een simpel maar makkelijke adapter voor universeel gebruik.",
        type:"Cables",
        prijs: 53.95,
        inWinkelmandje:0

    },
    {
        id: 6,
        naam:"AE J1772 Type 1" ,
        afbeelding:"assets/producten_img/possessed-photography-znCLdh5-Srk-unsplash.jpg" ,
        beschrijving: "Een simpel maar makkelijke adapter voor universeel gebruik.",
        type:"Power suply",
        prijs: 35.80,
        inWinkelmandje:0

    },
    {
        id: 7,
        naam:"Display-color led" ,
        afbeelding:"assets/producten_img/vishnu-mohanan-IAfNjy3fh6g-unsplash.jpg" ,
        beschrijving: "Een simpel maar makkelijke adapter voor universeel gebruik.",
        type:"Display",
        prijs: 62.95,
        inWinkelmandje:0
    },
    {
        id: 8,
        naam:"WiFi kit" ,
        afbeelding:"assets/producten_img/vishnu-mohanan-O68LT-zCYFg-unsplash.jpg" ,
        beschrijving: "Een simpel maar makkelijke adapter voor universeel gebruik.",
        type:"Display",
        prijs: 26.50,
        inWinkelmandje:0

    }
];

const productenLijstJson= JSON.stringify(productenParts);
localStorage.setItem('productenParts', productenLijstJson);

// prueba

if(typeof (Storage)!=='undefined'){

}





// fin prueba

for(let i=0; i<winkelmandje.length; i++){
    winkelmandje[i].addEventListener('click', ()=>{
        aantalItemsMandje(productenParts[i]);

        totalCost(productenParts[i]);
    })
}
function aantalItemsMandje(productParts){

    let productNummmers = localStorage.getItem('aantalItemsMandje')

productNummmers = parseInt(productNummmers) + 1;
if(productNummmers){
    localStorage.setItem('aantalItemsMandje', productNummmers.toString());
    document.querySelector('.producten_opteller').textContent = productNummmers.toString();
} else{
    localStorage.setItem('aantalItemsMandje',1);
    document.querySelector('.producten_opteller').textContent = 1;
}

}

function totalCost(productParts){

    let cartCost = localStorage.getItem('totalCost')
    if(cartCost!=null){
        cartCost= parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + productParts.prijs);

    } else{
        localStorage.setItem('totalCost', productParts.prijs);
    }

}

function onLoadAantalItemsMandje(){
     let productNummers = localStorage.getItem('AantalItemsMandje');
    document.querySelector('.producten_opteller').textContent = productNummers;

}
onLoadAantalItemsMandje()





function productenRenderen(){

    productenParts.forEach((info) => {
        const cardsParts = document.createElement('div');
        cardsParts.classList.add('card_parts', 'col-md-4', 'col-lg-3')

        cardsParts.innerHTML = ` <div class="card card-product-onderdelen__">
                <div class="card text-bg-dark">
                    <img src="${info.afbeelding}" alt="foto_card" class="img-fluid"/>
                    <a href="product_detail_station.html">
                      
                    </a>
                </div>

                <div class="card-img-overlay klein_card">
                    <button type="button" class="btn btn-link-secondary border border-0 btn_card_klein btn-item_toevoegen"
                            data-bs-toggle="modal" data-bs-target="#product_toegevoegd " id=" ${info.id}"  ><a
                            class="nav-link"
                            style="color: white"
                            href="#"><i
                            class="bi bi-cart2 fs-5"></i></a></button>
                    <button type="button" class="btn btn-link-secondary float-end border border-0 btn_card_klein"
                            data-bs-toggle="modal"
                            data-bs-target="#favoriet_toegevoegd2"><a
                            class="nav-link" style="color: white" href="#"><i class="bi bi-heart fs-5 "></i></a>
                    </button>


                </div>
                <div class="card-body" style="background-color: rgba(11,7,45,0.86)" >
                <h5 class="card-title float-start" style="color: #5EBCAF">${info.naam}</h5>
                    <p class="card-text float-start" style="color:#ffffff">${info.beschrijving}</p>
                    <p class="fs-6 fw-bold  float-end prijs" style="color:#ffffff">€ ${info.prijs}</p>

                </div>

            </div>
 `;


        productenLijstParts.appendChild(cardsParts);


    })
}

// const containerCartProduct = document.querySelector('#producten_container_parts')






