//Funciones principales para calcular áreas y perímetros.
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

function perimetroTriangulo( lado1, lado2, base){
    lado1=Number(lado1);
    lado2=Number(lado2);
    base=Number(base);
    return base + lado1 + lado2;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

function diametro(radio){
    return radio * 2;
}

//Función que calcula el perímetro o circunferencia de un círculo.
function circunferencia(radio){
    return Math.PI * diametro(radio);
}

function areaCirculo(radio){
    return Math.PI * radio * radio;
}

//Funciones que interactuan con el HTML.
//Funciones del cuadrado.
function calcularPerimetroCuadrado(){
    alert( perimetroCuadrado(document.getElementById("entradaCuadrado").value) + " cm.")
}

function calcularAreaCuadrado(){
    alert( areaCuadrado(document.getElementById("entradaCuadrado").value) + " cm^2.")
}
//Funciones del triángulo.
function calcularPerimetroTriangulo(){
    ladoTriangulo1=document.getElementById("entradaLadoTriangulo1").value;
    ladoTriangulo2=document.getElementById("entradaLadoTriangulo2").value;
    baseTriangulo=document.getElementById("entradaBaseTriangulo").value;

    alert( perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) + " cm.")
}

function calcularAreaTriangulo(){
    baseTriangulo=document.getElementById("entradaBaseTriangulo").value;
    alturaTriangulo=document.getElementById("entradaAlturaTriangulo").value;

    alert( areaTriangulo(baseTriangulo, alturaTriangulo) + " cm^2.")
}
//Funciones del círculo.
function calcularCircunferencia(){
    alert( circunferencia(document.getElementById("entradaRadioCirculo").value) + " cm.")
}

function calcularAreaCirculo(){
    alert( areaCirculo(document.getElementById("entradaRadioCirculo").value) + " cm^2.")
}

//Función extra que evalua si los datos ingresados corresponden a un triángulo isósceles
//y calcula la altura del triángulo.
function calcularAlturaIsosceles(){
    base=Number(document.getElementById("entradaBaseIsosceles").value);
    lado1=Number(document.getElementById("entradaLadoIsosceles1").value);
    lado2=Number(document.getElementById("entradaLadoIsosceles2").value);
    if(lado1 === lado2){
        if( (lado1 + lado2) > base){
            lado1=lado1*lado1;
            base=base/2;
            base=base*base;
            alert("La altura es de " + Math.sqrt(lado1-base) + " cm.");
        }
        else{
            alert("Esas dimensiones no pueden formar un triángulo.")
        }
    }
    else{
        alert("No es un triángulo isósceles.")
    }
}