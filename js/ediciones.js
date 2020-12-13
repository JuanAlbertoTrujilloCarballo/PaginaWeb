window.onload = initialize;

var silla1;

function initialize() {
    var svgObject = document.getElementById('svg-object').contentDocument;
    silla1 = svgObject.getElementById("Silla1");

    silla1.addEventListener("mouseover", showInfoMouseOverSillas);
    silla1.addEventListener("mouseout", showInfoMouseOutSillas);
}

function showInfoMouseOverSillas() {
    var infoSilla1 = document.getElementById("info-Silla1");
    infoSilla1.innerHTML = "Esa es la silla 1";

    Silla1.style.fill = "red";
}

function showInfoMouseOutTelde() {
    var infoSilla1 = document.getElementById("info-telde");
    infoSilla1.innerHTML = "Pon el ratón sobre el municipio de Telde";

    silla1.style.fill = "#fff8dc";
}