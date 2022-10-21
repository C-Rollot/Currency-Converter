//BOUTONS
let buttonUSD = document.getElementById("euro-to-usd");
let buttonEuro = document.getElementById("usd-to-euro");

let buttonEuroToPound = document.getElementById("euro-to-pound-button");
let buttonPoundToEuro = document.getElementById("pound-to-euro-button");

let buttonEuroToCHF = document.getElementById("euro-to-chf-button");
let buttonCHFToEuro = document.getElementById("chf-to-euro-button");

let buttonEuroToYen = document.getElementById("euro-to-yen-button");
let buttonYenToEuro = document.getElementById("yen-to-euro-button");

let buttonUsdToPound = document.getElementById("usd-to-pound-button");
let buttonPoundToUsd = document.getElementById("pound-to-usd-button");

let buttonUsdToCHF = document.getElementById("usd-to-chf-button");
let buttonChfToUSD = document.getElementById("chf-to-usd-button");

let buttonUsdToYen = document.getElementById("usd-to-yen-button");
let buttonYenToUSD = document.getElementById("yen-to-usd-button");

//FONCTIONS
function euroToUSD() {
    let sommeEuro = +document.getElementById("euro-to-usd-input").value;
    let convertOp = sommeEuro * 0.99;
    alert(sommeEuro + ' € = ' + convertOp + ' $.');
    console.log(convertOp);
    return convertOp;
}

function usdToEuro() {
    let sommeUSD = +document.getElementById("usd-to-euro-input").value;
    let convertOp = sommeUSD * 1.01;
    alert(sommeUSD + ' $ = ' + convertOp + ' €.');
    console.log(convertOp);
    return convertOp;
}

function euroToPound() {
    let sommeEuro = +document.getElementById("euro-to-pound-input").value;
    let convertOp = sommeEuro * 0.84;
    alert(sommeEuro + ' € = ' + convertOp + ' £.');
    console.log(convertOp);
    return convertOp;
}

function poundToEuro() {
    let sommePound = +document.getElementById("pound-to-euro-input").value;
    let convertOp = sommePound * 1.19;
    alert(sommePound + ' £ = ' + convertOp + ' €.');
    console.log(convertOp);
    return convertOp;
}

function euroToCHF() {
    let sommeEuro = +document.getElementById("euro-to-chf-input").value;
    let convertOp = sommeEuro * 0.96;
    alert(sommeEuro + ' € = ' + convertOp + ' CHF.');
    console.log(convertOp);
    return convertOp;
}

function chfToEuro() {
    let sommeCHF = +document.getElementById("chf-to-euro-input").value;
    let convertOp = sommeCHF * 1.05;
    alert(sommeCHF + ' CHF = ' + convertOp + ' €.');
    console.log(convertOp);
    return convertOp;
}

function euroToYen() {
    let sommeEuro = +document.getElementById("euro-to-yen-input").value;
    let convertOp = sommeEuro * 135.76;
    alert(sommeEuro + ' € = ' + convertOp + ' Yen.');
    console.log(convertOp);
    return convertOp;
}

function yenToEuro() {
    let sommeYen = +document.getElementById("yen-to-euro-input").value;
    let convertOp = sommeYen * 0.0074;
    alert(sommeYen + ' Yen = ' + convertOp + ' €.');
    console.log(convertOp);
    return convertOp;
}  

function usdToPound() {
    let sommeUSD = +document.getElementById("usd-to-pound-input").value;
    let convertOp = sommeUSD * 0.85;
    alert(sommeUSD + ' $ = ' + convertOp + ' £.');
    console.log(convertOp);
    return convertOp;
}

function poundToUSD() {
    let sommePound = +document.getElementById("pound-to-usd-input").value;
    let convertOp = sommePound * 1.18;
    alert(sommePound + ' £ = ' + convertOp + ' $.');
    console.log(convertOp);
    return convertOp;
}

function usdToCHF() {
    let sommeUSD = +document.getElementById("usd-to-chf-input").value;
    let convertOp = sommeUSD * 0.96;
    alert(sommeUSD + ' $ = ' + convertOp + ' CHF.');
    console.log(convertOp);
    return convertOp;
}

function chfToUSD() {
    let sommeCHF = +document.getElementById("chf-to-usd-input").value;
    let convertOp = sommeCHF * 1.04;
    alert(sommeCHF + ' CHF = ' + convertOp + ' $.');
    console.log(convertOp);
    return convertOp;
}

function usdToYen() {
    let sommeUSD = +document.getElementById("usd-to-yen-input").value;
    let convertOp = sommeUSD * 136.46;
    alert(sommeUSD + ' $ = ' + convertOp + ' Yen.');
    console.log(convertOp);
    return convertOp;
}

function yenToUSD() {
    let sommeYen = +document.getElementById("yen-to-usd-input").value;
    let convertOp = sommeYen * 0.0073;
    alert(sommeYen + ' yen = ' + convertOp + ' $.');
    console.log(convertOp);
    return convertOp;
}

//EVENT LISTENERS
buttonUSD.addEventListener("click", euroToUSD);
buttonEuro.addEventListener("click", usdToEuro);

buttonEuroToPound.addEventListener("click", euroToPound);
buttonPoundToEuro.addEventListener("click", poundToEuro);

buttonEuroToCHF.addEventListener("click", euroToCHF);
buttonCHFToEuro.addEventListener("click", chfToEuro);

buttonEuroToYen.addEventListener("click", euroToYen);
buttonYenToEuro.addEventListener("click", yenToEuro);

buttonUsdToPound.addEventListener("click", usdToPound);
buttonPoundToUsd.addEventListener("click", poundToUSD);

buttonUsdToCHF.addEventListener("click", usdToCHF);
buttonChfToUSD.addEventListener("click", chfToUSD);

buttonUsdToYen.addEventListener("click", usdToYen);
buttonYenToUSD.addEventListener("click", yenToUSD);