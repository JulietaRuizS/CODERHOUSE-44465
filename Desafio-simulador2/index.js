let product = 0;
let amount= 0;
let price=0;
let total=0;

function sale () {
    while ( product ===0 || product > 1 || !product){
        product = parseInt (prompt( "Ingrese el codigo del producto elegido"));
    }
    switch (product){
        case 1:
            product = "Masilla Ceramica TNX24";
            price = 1250;
            break;
        case 2:
            product = "Masilla Ceramica TNX35";
            price = 1670;
            break;
        case 3:
            product = "Masilla Alumina ALUMIIK";
            price = 2500;
            break;
        case 4:
            product = "Masilla Ceramica TNX62";
            price = 1920;
            break;
    }   
    while (amonunt ===0 || !amount)  {
        amount = parseInt ( prompt ( "Indique la cantidad de " + product+ "desea llevar."));
    }      
}
function finalAcount (){
    total = amount * price;
    alert ( "Ha comprado" + amount+ +product+ "Muchas gracias7u, a la brevedad recibira los productos.");
}

sale ()
finalAcount ()