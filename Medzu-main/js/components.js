
//  HTML

async function cargarComponente(id, archivo) {

    const respuesta = await fetch(archivo);

    if (!respuesta.ok) {
        console.error("No se pudo cargar:", archivo);
        return;
    }

    const html = await respuesta.text();

    document.getElementById(id).innerHTML = html;

}

// menú responsive


function iniciarMenu() {

    const btnNav = document.querySelector(".btn-mobile-nav");
    const header = document.querySelector(".header");

    if (!btnNav || !header) return;

    btnNav.onclick = () => {

        header.classList.toggle("nav-open");

    };

}


//  Login


function iniciarLogin() {

    if (typeof iniciarSistemaLogin === "function") {

        iniciarSistemaLogin();

    }

}


window.addEventListener("DOMContentLoaded", async () => {

    await cargarComponente(
        "header-container",
        "components/header.html"
    );

    await cargarComponente(
        "footer-container",
        "components/footer.html"
    );
await cargarComponente(
    "login-container",
    "components/login.html"
);
    iniciarMenu();
if(typeof iniciarScriptGeneral==="function"){

    iniciarScriptGeneral();

}
    iniciarLogin();

});
