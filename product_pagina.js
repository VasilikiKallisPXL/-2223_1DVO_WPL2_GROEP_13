
const productenParts = [
    {
        id: 1,
        naam:"Adapter" ,
        afbeelding:"assets/foto_klein_card.png" ,
        beschrijving: "Een simpel maar makkelijke adapter voor universeel gebruik.",
        type:"High-Speed fuses",
        prijs: 66,
        hoeveelheid:0

    },
    {
        id: 2,
        naam:"Charger" ,
        afbeelding:"assets/producten_img/card_foto_product.jpg" ,
        beschrijving: "Een simpel maar makkelijke adapter voor universeel gebruik.",
        type:"Charging plug",
        prijs: 120,
        hoeveelheid:0

    },
    {
        id: 3,
        naam:"Universal controller" ,
        afbeelding:"assets/producten_img/jonas-svidras-e28-krnIVmo-unsplash.jpg" ,
        beschrijving: "Een simpel maar makkelijke adapter voor universeel gebruik.",
        type:"Display",
        prijs: 76.50,
        hoeveelheid:0

    },
    {
        id: 4,
        naam:"Kabel" ,
        afbeelding:"assets/producten_img/juice-p1-FJU3JUwM-unsplash.jpg" ,
        beschrijving: "Een simpel maar makkelijke adapter voor universeel gebruik.",
        type:"Current Transformer",
        prijs: 32.20,
        hoeveelheid:0

    },
    {
        id: 5,
        naam:"USB to serial" ,
        afbeelding:"assets/producten_img/lars-kienle-t8ZOIs1RtyE-unsplash.jpg" ,
        beschrijving: "Een simpel maar makkelijke adapter voor universeel gebruik.",
        type:"Cables",
        prijs: 53.95,
        hoeveelheid:0

    },
    {
        id: 6,
        naam:"AE J1772 Type 1" ,
        afbeelding:"assets/producten_img/possessed-photography-znCLdh5-Srk-unsplash.jpg" ,
        beschrijving: "Een simpel maar makkelijke adapter voor universeel gebruik.",
        type:"Power suply",
        prijs: 35.80,
        hoeveelheid:0

    },
    {
        id: 7,
        naam:"Display-color led" ,
        afbeelding:"assets/producten_img/vishnu-mohanan-IAfNjy3fh6g-unsplash.jpg" ,
        beschrijving: "Een simpel maar makkelijke adapter voor universeel gebruik.",
        type:"Display",
        prijs: 62.95,
        hoeveelheid:0
    },
    {
        id: 8,
        naam:"WiFi kit" ,
        afbeelding:"assets/producten_img/vishnu-mohanan-O68LT-zCYFg-unsplash.jpg" ,
        beschrijving: "Een simpel maar makkelijke adapter voor universeel gebruik.",
        type:"Display",
        prijs: 26.50,
        hoeveelheid:0


    },

];

let containerProducten = document.getElementById('producten_container_parts');

function DomProductenParts() {
    productenParts.forEach((product) => {
        let contentCardsParts = document.createElement("div");
        contentCardsParts.classList.add('col-md-4', 'col-lg-3', 'card_parts');
        contentCardsParts.innerHTML = `  <div class="card card-product-onderdelen__" xmlns="http://www.w3.org/1999/html">
                <div class="card text-bg-dark">
                    <img src="${product.afbeelding}" alt="foto_card" class="img-fluid"/>
                    <a href="#">
                        <div class="mask" style="background-color: rgba(229,229,229,0.15);"></div>
                    </a>
                </div>

                <div class="card-img-overlay klein_card">
                    <button type="button" class="btn btn-link-secondary border border-0 btn_card_klein btn-item_kopen"
                            data-bs-toggle="modal" data-bs-target="#product_toegevoegd" data-id="${product.id}"<a
                            class="nav-link " style="color: white" href="#"> <i
                            class="bi bi-cart2 fs-5"></i></a>
                            </button>
                    <button type="button" class="btn btn-link-secondary float-end border border-0 btn_card_klein"
                            data-bs-toggle="modal"
                            data-bs-target="#favoriet_toegevoegd2"><a
                            class="nav-link" style="color: white" href="#"><i class="bi bi-heart fs-5 "></i></a>
                    </button>
                </div>
                <div class="card-body" style="background-color: rgba(11,7,45,0.86)">
                    <h5 class="card-title float-start" style="color: #5EBCAF">${product.naam}</h5>
                    <p class="card-text float-start" style="color:#ffffff">${product.beschrijving}</p>
                    <p class="fs-6 fw-bold  float-end " style="color:#ffffff">${product.prijs}</p>
                </div>
            </div>
        </div>`;

        containerProducten.appendChild(contentCardsParts);


    });

    let kopen = document.querySelectorAll('.btn-item_kopen');

    for(let i = 0; i <kopen.length;i++){
        kopen[i].addEventListener('click', function() {
            const product =productenParts[i]
            const infoProduct = {

                id:product.id,
                naam: product.naam,
                prijs: product.prijs,
                aantal: product.hoeveelheid,
            };

            console.log(infoProduct);
            aantalItemsWinkelmandje(infoProduct);
            totalTeBetalen(infoProduct);

        });

    }

}

function updateWinkelmandje(){

    let aantalProducten = localStorage.getItem('aantalItemsWinkelmandje');
    const btnWinkelmandje = document.querySelector('.container-mandje-icoon');
    const containerMandjeProduct= document.querySelector('.container_cart_products');
    // const WinkelmandjePaginaBtn= document.
    btnWinkelmandje.addEventListener('click',() =>{
        containerMandjeProduct.classList.toggle('hidden-mandje')
    })

    if(aantalProducten){
        document.querySelector('.producten_opteller').textContent = aantalProducten

    }


}

function aantalItemsWinkelmandje(infoProduct){
    console.log('added', infoProduct)
    let aantalProducten = localStorage.getItem('aantalItemsWinkelmandje');
    aantalProducten = parseInt( aantalProducten);

    if( aantalProducten){
        localStorage.setItem('aantalItemsWinkelmandje', (aantalProducten + 1).toString());
        document.querySelector('.producten_opteller').textContent =  (aantalProducten + 1).toString()//container
    }
    else{
        localStorage.setItem('aantalItemsWinkelmandje','1');
        document.querySelector('.producten_opteller').textContent = '1';//container nav
    }

    productenToegevoegd(infoProduct);

}


// function productenToegevoegd(infoProduct) {
//     let winkelmandje = JSON.parse(localStorage.getItem('productenToegevoegd')) || {};
//
//     if (winkelmandje.hasOwnProperty(infoProduct.id)) {
//         infoProduct.aantal = winkelmandje[infoProduct.id].aantal + 1;
//     } else {
//         infoProduct.aantal = 1;
//     }
//
//     winkelmandje[infoProduct.id] = infoProduct;
//     localStorage.setItem('productenToegevoegd', JSON.stringify(winkelmandje));
// }


function productenToegevoegd(infoProduct){

    let winkelmandje=localStorage.getItem('productenToegevoegd');
    winkelmandje = JSON.parse(winkelmandje);

    if(winkelmandje != null){
        if(winkelmandje[infoProduct.id] === undefined){
            winkelmandje = {
                ...winkelmandje,
                [infoProduct.id]:infoProduct
            }
        }
        winkelmandje[infoProduct.id].aantal += 1;

    } else {
        infoProduct.aantal = 1;
        winkelmandje = {
            [infoProduct.id]: infoProduct
        }
    }

    localStorage.setItem('productenToegevoegd', JSON.stringify(winkelmandje));

    }


let containerProducten = document.getElementById('producten_container_parts');

function DomProductenParts() {
    productenParts.forEach((product) => {
        let contentCardsParts = document.createElement("div");
        contentCardsParts.classList.add('col-md-4', 'col-lg-3', 'card_parts');
        contentCardsParts.innerHTML = `  <div class="card card-product-onderdelen__" xmlns="http://www.w3.org/1999/html">
                <div class="card text-bg-dark">
                    <img src="${product.afbeelding}" alt="foto_card" class="img-fluid"/>
                    <a href="#">
                        <div class="mask" style="background-color: rgba(229,229,229,0.15);"></div>
                    </a>
                </div>

                <div class="card-img-overlay klein_card">
                    <button type="button" class="btn btn-link-secondary border border-0 btn_card_klein btn-item_kopen"
                            data-bs-toggle="modal" data-bs-target="#product_toegevoegd" data-id="${product.id}"<a
                            class="nav-link " style="color: white" href="#"> <i
                            class="bi bi-cart2 fs-5"></i></a>
                            </button>
                    <button type="button" class="btn btn-link-secondary float-end border border-0 btn_card_klein"
                            data-bs-toggle="modal"
                            data-bs-target="#favoriet_toegevoegd2"><a
                            class="nav-link" style="color: white" href="#"><i class="bi bi-heart fs-5 "></i></a>
                    </button>
                </div>
                <div class="card-body" style="background-color: rgba(11,7,45,0.86)">
                    <h5 class="card-title float-start" style="color: #5EBCAF">${product.naam}</h5>
                    <p class="card-text float-start" style="color:#ffffff">${product.beschrijving}</p>
                    <p class="fs-6 fw-bold  float-end " style="color:#ffffff">${product.prijs}</p>
                </div>
            </div>
        </div>`;

        containerProducten.appendChild(contentCardsParts);


    });

    let kopen = document.querySelectorAll('.btn-item_kopen');

    for(let i = 0; i <kopen.length;i++){
        kopen[i].addEventListener('click', function() {
            const product =productenParts[i]
            const infoProduct = {

                id:product.id,
                naam: product.naam,
                prijs: product.prijs,
                aantal: product.hoeveelheid,
            };

            console.log(infoProduct);
            aantalItemsWinkelmandje(infoProduct);
            totalTeBetalen(infoProduct);

        });

    }

}

function updateWinkelmandje(){

    let aantalProducten = localStorage.getItem('aantalItemsWinkelmandje');
    const btnWinkelmandje = document.querySelector('.container-mandje-icoon');
    const containerMandjeProduct= document.querySelector('.container_cart_products');
    // const WinkelmandjePaginaBtn= document.
    btnWinkelmandje.addEventListener('click',() =>{
        containerMandjeProduct.classList.toggle('hidden-mandje')
    })

    if(aantalProducten){
        document.querySelector('.producten_opteller').textContent = aantalProducten

    }


}

function aantalItemsWinkelmandje(infoProduct){
    console.log('added', infoProduct)
    let aantalProducten = localStorage.getItem('aantalItemsWinkelmandje');
    aantalProducten = parseInt( aantalProducten);

    if( aantalProducten){
        localStorage.setItem('aantalItemsWinkelmandje', (aantalProducten + 1).toString());
        document.querySelector('.producten_opteller').textContent =  (aantalProducten + 1).toString()//container
    }
    else{
        localStorage.setItem('aantalItemsWinkelmandje','1');
        document.querySelector('.producten_opteller').textContent = '1';//container nav
    }

    productenToegevoegd(infoProduct);

}

function productenToegevoegd(infoProduct){

    let winkelmandje=localStorage.getItem('productenToegevoegd');
    winkelmandje = JSON.parse(winkelmandje);

    if(winkelmandje != null){
        if(winkelmandje[infoProduct.id] === undefined){
            winkelmandje = {
                ...winkelmandje,
                [infoProduct.id]:infoProduct
            }
        }
        winkelmandje[infoProduct.id].aantal += 1;

    } else {
        infoProduct.aantal = 1;
        winkelmandje = {
            [infoProduct.id]: infoProduct
        }
    }

    localStorage.setItem('productenToegevoegd', JSON.stringify(winkelmandje));

}

function totalTeBetalen(infoProduct){
    let totalWinkelmandje = localStorage.getItem('totalTeBetalen');


    if( totalWinkelmandje!=null){
        totalWinkelmandje = parseInt( totalWinkelmandje);
        localStorage.setItem('totalTeBetalen',   totalWinkelmandje + infoProduct.prijs);

    } else{
        localStorage.setItem('totalTeBetalen',infoProduct.prijs.toString());

    }

    productenWinkelmandjeTonen()
}




function totalTeBetalen(infoProduct){
    let totalWinkelmandje = localStorage.getItem('totalTeBetalen');


    if( totalWinkelmandje!=null){
        totalWinkelmandje = parseInt( totalWinkelmandje);
        localStorage.setItem('totalTeBetalen',   totalWinkelmandje + infoProduct.prijs);

    } else{
        localStorage.setItem('totalTeBetalen',infoProduct.prijs.toString());

    }

    productenWinkelmandjeTonen()
}

////WINKELMANDJE BINNEN PRODUCTPAGINA




function productenWinkelmandjeTonen() {
    let winkelmandje = JSON.parse(localStorage.getItem("productenToegevoegd"));
    let totalBedrag = localStorage.getItem('totalTeBetalen');
    const containerCartProduct = document.querySelector('.container_cart_products');
    containerCartProduct.innerHTML = '';

////WINKELMANDJE BINNEN PRODUCTPAGINA



function productenWinkelmandjeTonen() {
    let winkelmandje = JSON.parse(localStorage.getItem("productenToegevoegd"));
    let totalBedrag = localStorage.getItem('totalTeBetalen');
    const containerCartProduct = document.querySelector('.container_cart_products');
    containerCartProduct.innerHTML = '';


    if (winkelmandje) {
        Object.values(winkelmandje).map(product => {
            let resumeBestelling = document.createElement('div');
            resumeBestelling.classList.add('resume_bestelling');
            resumeBestelling.innerHTML = `
                <div class="info-cart-product">
                    <span class="aantal_producten">${product.aantal}</span>
                    <p class="naam_product">${product.naam}</p>
                    <span class="prijs_product">${product.prijs * product.aantal}</span>
                  <i class="bi bi-x-lg product_delete" data-index="${product.id}" onclick="deleteProduct(${product.id})"></i>



                </div>
            `;
            containerCartProduct.appendChild(resumeBestelling);
        });

        let totalPrijsBestelling = document.createElement('div');
        totalPrijsBestelling.classList.add('total_prijs_bestelling');
        totalPrijsBestelling.innerHTML = `
            <div class="cart-total">
                <h3>Total:</h3>
                <span class="total-cost"> €${totalBedrag}</span>
            </div>
             <div class="checkout-button btn ">
                <button onclick="window.location.href='winkelmandje.html'">Naar jouw Winkelmandje</button>
            </div>
        `;
        containerCartProduct.appendChild(totalPrijsBestelling);
    }



}
function deleteProduct(index) {
    let winkelmandje = JSON.parse(localStorage.getItem('productenToegevoegd'));
    const updatedWinkelmandje = Object.values(winkelmandje).filter(product => parseInt(product.id) !== parseInt(index));
    const updatedWinkelmandjeObject = updatedWinkelmandje.reduce((acc, product, index) => {
        acc[index] = product;
        return acc;
    }, {});
    let aantalProducten = Object.keys(updatedWinkelmandje).length;
    localStorage.setItem('aantalItemsWinkelmandje', aantalProducten.toString());

    localStorage.setItem('productenToegevoegd', JSON.stringify(updatedWinkelmandjeObject));
    productenWinkelmandjeTonen();
    updateTotalPrijs();
    updateTellerCart();
}


    if (winkelmandje) {
        Object.values(winkelmandje).map(product => {
            let resumeBestelling = document.createElement('div');
            resumeBestelling.classList.add('resume_bestelling');
            resumeBestelling.innerHTML = `
                <div class="info-cart-product">
                    <span class="aantal_producten">${product.aantal}</span>
                    <p class="naam_product">${product.naam}</p>
                    <span class="prijs_product">${product.prijs * product.aantal}</span>
                  <i class="bi bi-x-lg product_delete" data-index="${product.id}" onclick="deleteProduct(${product.id})"></i>




                </div>
            `;
            containerCartProduct.appendChild(resumeBestelling);
        });

function updateTotalPrijs() {
    let winkelmandje = JSON.parse(localStorage.getItem('productenToegevoegd'));
    let totalBedrag = 0;
    if (winkelmandje) {
        Object.values(winkelmandje).forEach(product => {
            totalBedrag += product.prijs * product.aantal;
        });
    }
    localStorage.setItem('totalTeBetalen', totalBedrag);

    const totalCostElement = document.querySelector('.total-cost');
    if (totalCostElement) {
        totalCostElement.textContent = `€ ${totalBedrag}`;
        if(totalBedrag === 0){
            document.querySelector('.total-cost').textContent =`Jouw winkelmandje is nog leeg`
        }
    }
}

function updateTellerCart(){
    let winkelmandje = JSON.parse(localStorage.getItem('productenToegevoegd'));
    const productTeller= winkelmandje? winkelmandje.length : 0;
    const productTellerCijfer = document.querySelector('.producten_opteller');
    if(productTellerCijfer){
        productTellerCijfer.textContent = productTeller.toString();
    }
}

// ////WINKELMANDJE PAGINA
// let containerWinkelmandjePagina = document.querySelector('.products')
// let WinkelmandjePaginaResumeBestelling = document.createElement('div');
// WinkelmandjePaginaResumeBestelling.classList.add('resume_bestelling_producten');
// let winkelmandjeResumeTeBetalen = document.createElement('div');
// winkelmandjeResumeTeBetalen.classList.add('resume_te_betalen');
// let    containerBetalling = document.createElement('div');
// containerBetalling.classList.add('container_betaling');
//
// if (winkelmandje && containerWinkelmandjePagina) {
//     containerWinkelmandjePagina.innerHTML = '';
//     Object.values(winkelmandje).map(product => {
//         containerWinkelmandjePagina.innerHTML += `
//     <div class="product">
//       <i>buscar icoon dismiss</i>
//       <img src="assets/producten_img/${product.afbeelding}" alt="product_verwijderd"/>
//       <span>${product.naam}</span>
//     </div>
//   `;
//     });
//     containerWinkelmandjePagina.appendChild(WinkelmandjePaginaResumeBestelling);
//     containerBetalling.appendChild(winkelmandjeResumeTeBetalen);
//

        let totalPrijsBestelling = document.createElement('div');
        totalPrijsBestelling.classList.add('total_prijs_bestelling');
        totalPrijsBestelling.innerHTML = `
            <div class="cart-total">
                <h3>Total:</h3>
                <span class="total-cost"> €${totalBedrag}</span>
            </div>
             <div class="checkout-button btn ">
                <button onclick="window.location.href='winkelmandje.html'">Ir a Winkelmandje</button>
            </div>
        `;
        containerCartProduct.appendChild(totalPrijsBestelling);
    }



// function filterenProducten(){
//     const filterProducts = document.querySelectorAll('.badge_filter');
//     filterProducts.forEach(filterProducts =>{
//         filterProducts.addEventListener('click', ()=>{
//             const gekozenCategorie = filterProducts.textContent.trim();
//             const productenMetFilter= productenParts.filter(productenParts =>{
//                 return productenParts.type === gekozenCategorie
//             });
//
//         })
//     })
// }

DomProductenParts();
productenWinkelmandjeTonen()
updateWinkelmandje();
deleteProduct();

}
function deleteProduct(index) {
    let winkelmandje = JSON.parse(localStorage.getItem('productenToegevoegd'));
    const updatedWinkelmandje = Object.values(winkelmandje).filter(product => parseInt(product.id) !== parseInt(index));
    const updatedWinkelmandjeObject = updatedWinkelmandje.reduce((acc, product, index) => {
        acc[index] = product;
        return acc;
    }, {});
    let aantalProducten = Object.keys(updatedWinkelmandje).length;
    localStorage.setItem('aantalItemsWinkelmandje', aantalProducten.toString());

    localStorage.setItem('productenToegevoegd', JSON.stringify(updatedWinkelmandjeObject));
    productenWinkelmandjeTonen();
    updateTotalPrijs();
    updateTellerCart();
}
function updateTotalPrijs() {
    let winkelmandje = JSON.parse(localStorage.getItem('productenToegevoegd'));
    let totalBedrag = 0;
    if (winkelmandje) {
        Object.values(winkelmandje).forEach(product => {
            totalBedrag += product.prijs * product.aantal;
        });
    }
    localStorage.setItem('totalTeBetalen', totalBedrag);

    const totalCostElement = document.querySelector('.total-cost');
    if (totalCostElement) {
        totalCostElement.textContent = `€ ${totalBedrag}`;
        if(totalBedrag === 0){
            document.querySelector('.total-cost').textContent =`Jouw winkelmandje is nog leeg`
        }
    }
}

function updateTellerCart(){
    let winkelmandje = JSON.parse(localStorage.getItem('productenToegevoegd'));
    const productTeller= winkelmandje? winkelmandje.length : 0;
    const productTellerCijfer = document.querySelector('.producten_opteller');
    if(productTellerCijfer){
        productTellerCijfer.textContent = productTeller.toString();
    }
}
function filterenProducten(){
    const filterProducts = document.querySelectorAll('.badge_filter');
    filterProducts.forEach(filterProducts =>{
        filterProducts.addEventListener('click', ()=>{
            const gekozenCategorie = filterProducts.textContent.trim();
            const producteMetFilter= productenParts.filter(productenParts =>{
                return productenParts.type === gekozenCategorie
            });

        })
    })
}

DomProductenParts();
productenWinkelmandjeTonen()
updateWinkelmandje();
deleteProduct();

