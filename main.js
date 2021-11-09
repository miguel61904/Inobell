let contenedor = document.querySelector(".flex-container");
let contador = 0;

function productos (img,nombre, precio, descripcion){
    contador += 1;
    img= "<img src='./assets/img/producto1.jpg'>";
    nombre = `<h2>${nombre}</h2>`;
    precio = `<p><b>${precio}</b></p>`;
    descripcion = `<p>${descripcion}</p>`
    return[img,nombre,modelo, precio];
}

const changeHidden = (number)=>{
    document.querySelector("sell_data").value = number;
}

let documentFragment = document.createDocumentFragment();

for (let i = 0; i< 6; i++){
    let ramdom = Math.round(Math.random()*10 + 30);
    let producto = llaves('Crema Lisadora',`Crema Lisadora`, `precio ${ramdom} $`);
    let div = document.createElement("DIV");
    div.addEventListener("click",() => {changeHidden(ramdom2)});
    div.tabIndex = i;
    div.classList.add(`item`,"flex-item");
    div.innerHTML =  producto[0] + producto[1] + producto[2] + producto[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);