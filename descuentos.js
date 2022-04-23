// var precio_original = 100;
// var descuento = 15;

// var porcentaje_final = 100 - descuento;
// var precio_final = (precio_original * porcentaje_final) / 100;

// console.log({precio_original, descuento, porcentaje_final, precio_final});

const cupones = [
    {
        cupon: "JavaScript es genial",
        descuento: 15
    },
    {
        cupon: "JavaScript es simple",
        descuento: 20
    },
    {
        cupon: "JavaScript es lo maximo",
        descuento: 30
    }
];

descuento_cupon=0;

function validar_cupon(){
    cupon_a_validar = document.getElementById("cupones").value;

    const funcion_cupon_valido = function(busca_cupones){
        return busca_cupones.cupon === cupon_a_validar;
    };

    cupon_valido = cupones.find(funcion_cupon_valido);

    if(!cupon_valido){
        alert("Cupón inválido.");
        document.getElementById("validar_cupon").innerText = "Cupón inválido.";
    }
    else{
        //console.log(cupon_valido.descuento);
        document.getElementById("validar_cupon").innerText = "Descuento adicional del " + cupon_valido.descuento + "%.";
        return cupon_valido.descuento;
    }
}

function calcula_descuento(precio, descuento){
    porcentaje_final = (100 - descuento) / 100;
    //precio_final = precio * porcentaje_final;
    // console.log("Favor de pagar " + precio_final + " pesos en caja.");
    return precio * porcentaje_final;
}

function precio_final(){
    precio=document.getElementById("precio").value;
    descuento=document.getElementById("descuento").value;

    //console.log(calcula_descuento(precio,descuento));
    sin_cupon=calcula_descuento(precio,descuento);
    con_cupon=calcula_descuento(sin_cupon,validar_cupon());
    document.getElementById("Precio_Final").innerText = "Usted debe pagar " + con_cupon + " pesos.";
}