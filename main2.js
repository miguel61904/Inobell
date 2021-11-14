let capilares = document.getElementById("btn-capilares");
let corporales = document.getElementById("btn-corporales");
let seccion4 = document.getElementById("seccion4");
let seccion3 = document.getElementById("seccion3");
capilares.onclick = filtro1
corporales.onclick = filtro2
function filtro1(){
    seccion4.style.display='none';
    seccion3.style.display='flex';
}

function filtro2(){
    seccion3.style.display='none';
    seccion4.style.display='flex';
}

