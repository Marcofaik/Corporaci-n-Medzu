const productos = [

{
    nombre:"CINTA MÉTRICA STANLEY",
    precio:"S/130",
    imagen:"img/Inventory/1.png"
},

{
    nombre:"CAJA DE HERRAMIENTAS STANLEY",
    precio:"S/128.60",
    imagen:"img/Inventory/2.png"
},

{
    nombre:"LLAVE INGLESA STANLEY",
    precio:"S/61",
    imagen:"img/Inventory/3.png"
},

{
    nombre:"CAJA DE HERRAMIENTAS 3 EN 1 TRUPPER",
    precio:"S/190",
    imagen:"img/Inventory/4.jpg"
},

{
    nombre:"ESMERIL ANGULAR TRUPPER",
    precio:"S/236",
    imagen:"img/Inventory/5.jpg"
},

{
    nombre:"ROTOMARTILLO TRUPPER",
    precio:"S/145",
    imagen:"img/Inventory/6.jpg"
},

{
    nombre:"KIT PARA ELECTRONICA SATA",
    precio:"S/49.90",
    imagen:"img/Inventory/7.jpg"
},

{
    nombre:"JUEGO DE LLAVES SATA",
    precio:"S/185",
    imagen:"img/Inventory/8.jpg"
}

];

let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

function cargar(item){
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML =  item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Descripción del modelo ";

    precioSeleccionado.innerHTML =  item.getElementsByTagName("span")[0].innerHTML;


}
function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}
function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
}
const track = document.querySelector(".carrusel-track");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// Duplica todas las tarjetas
track.innerHTML += track.innerHTML;

let cards = document.querySelectorAll(".carrusel-track .item");

let index = 0;

let visibles = obtenerVisibles();

function obtenerVisibles(){

    if(window.innerWidth<650) return 1;

    if(window.innerWidth<992) return 2;

    return 4;

}

window.addEventListener("resize",()=>{

    visibles=obtenerVisibles();

    mover(false);

});

function anchoCarta(){

    return cards[0].offsetWidth+25;

}

function mover(animacion=true){

    if(animacion){

        track.style.transition=".45s ease";

    }else{

        track.style.transition="none";

    }

    track.style.transform=
    `translateX(-${index*anchoCarta()}px)`;

}

function siguiente(){

    index++;

    mover();

    if(index>=cards.length/2){

        setTimeout(()=>{

            track.style.transition="none";

            index=0;

            mover(false);

        },450);

    }

}

function anterior(){

    if(index==0){

        track.style.transition="none";

        index=cards.length/2;

        mover(false);

        requestAnimationFrame(()=>{

            requestAnimationFrame(()=>{

                index--;

                mover();

            });

        });

    }

    else{

        index--;

        mover();

    }

}

next.onclick=siguiente;

prev.onclick=anterior;

let autoplay=setInterval(siguiente,2500);

const carrusel=document.querySelector(".carrusel");

carrusel.addEventListener("mouseenter",()=>{

    clearInterval(autoplay);

});

carrusel.addEventListener("mouseleave",()=>{

    autoplay=setInterval(siguiente,2500);

});

const botonCarrito = document.getElementById("btnCarrito");

if (botonCarrito) {

    botonCarrito.addEventListener("click", function () {

        const precioTexto = document.getElementById("precio").innerText;

const textoPrecio = document
    .getElementById("precio")
    .innerText
    .replace("S/","")
    .trim();

const producto = {

    nombre: document.getElementById("modelo").innerText,

    descripcion: document.getElementById("descripcion").innerText,

    precio: parseFloat(textoPrecio),

    imagen: document.getElementById("img").src

};

        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        carrito.push(producto);

        localStorage.setItem("carrito", JSON.stringify(carrito));

        actualizarContador();

        alert("Producto agregado al carrito.");

    });

}

const contador = document.getElementById("contadorCarrito");

function actualizarContador(){

    if(!contador) return;

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    contador.innerHTML = "Productos en el carrito: " + carrito.length;

}

actualizarContador();

let html = "";

for(let i=0;i<productos.length;i++){

    if(i%4===0){

        if(i!==0) html += "</div>";

        html += `<div class="fila">`;

    }

    html += `

        <div class="item" onclick="cargar(this)">

            <div class="contenedor-foto">

                <img src="${productos[i].imagen}">

            </div>

            <p class="descripcion">

                ${productos[i].nombre}

            </p>

            <span class="precio">

                ${productos[i].precio}

            </span>

        </div>

    `;

}

html += "</div>";

mostrador.innerHTML = html;

const btnVerCarrito = document.getElementById("verCarrito");

if (btnVerCarrito) {

    btnVerCarrito.addEventListener("click", function () {

        window.location.href = "Carrito.html";

    });

}