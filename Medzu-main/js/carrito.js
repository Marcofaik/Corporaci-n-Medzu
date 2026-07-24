const contenedor=document.getElementById("contenedorCarrito");

const total=document.getElementById("total");

let carrito=JSON.parse(localStorage.getItem("carrito"))||[];

function mostrarCarrito(){

contenedor.innerHTML="";

let suma=0;

if(carrito.length===0){

contenedor.innerHTML=`

<h2>No hay productos en el carrito.</h2>

`;

total.textContent="Total: S/ 0.00";

return;

}

carrito.forEach((producto,index)=>{

suma+=producto.precio;

contenedor.innerHTML+=`

<div class="tarjeta">

<img src="${producto.imagen}">

<h3>${producto.nombre}</h3>

<p>S/ ${producto.precio.toFixed(2)}</p>

<button onclick="eliminarProducto(${index})">

Eliminar

</button>

</div>

`;

});

total.textContent="Total: S/ "+suma.toFixed(2);

}

function eliminarProducto(i){

carrito.splice(i,1);

localStorage.setItem("carrito",JSON.stringify(carrito));

mostrarCarrito();

}

mostrarCarrito();