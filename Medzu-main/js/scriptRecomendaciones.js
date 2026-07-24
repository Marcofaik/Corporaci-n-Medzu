document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("whatsappForm");

    if (!formulario) return;

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const pregunta = document.getElementById("pregunta").value.trim();


        const telefono = "51970859987";

        const mensaje =
`Hola 👋

Mi nombre es ${nombre}.

Correo electrónico: ${correo}

Tengo la siguiente consulta:

${pregunta}

Muchas gracias.`;

        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");

        formulario.reset();

    });

});