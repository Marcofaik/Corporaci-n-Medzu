document.addEventListener("DOMContentLoaded", () => {

  console.log("Medzu Corporation SAC");

  const myName = "Marco Llacctas";
  const h1 = document.querySelector(".heading-primary");

  console.log(myName);
  console.log(h1);

  if (h1) {
    h1.textContent = "Soluciones ferreteras confiables para cada proyecto de construcción";
  }
const usuarios = [
    {
        usuario: "admin",
        password: "1234",
        nombre: "Administrador"
    },
    {
        usuario: "marco",
        password: "1234",
        nombre: "Marco Llacctas"
    }
];


const formLogin = document.getElementById("formLogin");

if(formLogin){

    formLogin.addEventListener("submit",function(e){

        e.preventDefault();

        const usuario = document.getElementById("usuario").value.trim();
        const password = document.getElementById("clave").value.trim();

        const encontrado = usuarios.find(u =>
            u.usuario === usuario &&
            u.password === password
        );

        if(encontrado){

            localStorage.setItem(
                "usuarioActivo",
                JSON.stringify(encontrado)
            );

            alert("Bienvenido " + encontrado.nombre);

            location.reload();

        }else{

            alert("Usuario o contraseña incorrectos");

        }

    });

}


const usuarioActivo =
JSON.parse(localStorage.getItem("usuarioActivo"));

const zonaLogin = document.getElementById("zonaLogin");

if(zonaLogin && usuarioActivo){

zonaLogin.innerHTML = `

<div class="usuario-box">

<div class="usuario-avatar">

${usuarioActivo.nombre.charAt(0)}

</div>

<span class="usuario-nombre">

${usuarioActivo.nombre}

</span>

<button id="cerrarSesion" class="btn-login">

Cerrar sesión

</button>

</div>

`;
    document
        .getElementById("cerrarSesion")
        .addEventListener("click",function(){

            localStorage.removeItem("usuarioActivo");

            location.reload();

        });

}


function verificarLogin(){

    return localStorage.getItem("usuarioActivo") != null;

}
// Abrir login
const abrir = document.getElementById("abrirLogin");

if(abrir){

    abrir.onclick=()=>{

        document
        .getElementById("loginModal")
        .classList.add("active");

    }

}


const cerrar=document.getElementById("cerrarLogin");

if(cerrar){

    cerrar.onclick=()=>{

        document
        .getElementById("loginModal")
        .classList.remove("active");

    }

}


const modal=document.getElementById("loginModal");

if(modal){

    modal.onclick=function(e){

        if(e.target===modal){

            modal.classList.remove("active");

        }

    }

}
});