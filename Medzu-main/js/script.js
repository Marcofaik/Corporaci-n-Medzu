document.addEventListener("componentesCargados", () => {

    console.log("Medzu Corporation SAC");

    const myName = "Marco Llacctas";
    console.log(myName);


    // CAMBIAR AÑO DEL FOOTER

    const yearEl = document.querySelector(".year");

    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }


    // MENÚ RESPONSIVE

    const btnNavEl = document.querySelector(".btn-mobile-nav");
    const headerEl = document.querySelector(".header");

    if (btnNavEl && headerEl) {

        btnNavEl.addEventListener("click", function () {

            headerEl.classList.toggle("nav-open");

        });

    }


    // SCROLL SUAVE

    const allLinks = document.querySelectorAll("a:link");

    allLinks.forEach(function (link) {

        link.addEventListener("click", function (e) {

            const href = link.getAttribute("href");

            if (href && href.startsWith("#")) {

                e.preventDefault();

                if (href === "#") {

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                } else {

                    const sectionEl = document.querySelector(href);

                    if (sectionEl) {

                        sectionEl.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }

            }

            if (link.classList.contains("main-nav-link") && headerEl) {

                headerEl.classList.remove("nav-open");

            }

        });

    });


    // HEADER STICKY

    const sectionHeroEl = document.querySelector(".section-hero");

    if (sectionHeroEl) {

        const obs = new IntersectionObserver(

            function (entries) {

                const ent = entries[0];

                if (!ent.isIntersecting) {

                    document.body.classList.add("sticky");

                } else {

                    document.body.classList.remove("sticky");

                }

            },

            {
                root: null,
                threshold: 0,
                rootMargin: "-80px",
            }

        );

        obs.observe(sectionHeroEl);

    }


    // FLEX GAP

    function checkFlexGap() {

        const flex = document.createElement("div");

        flex.style.display = "flex";
        flex.style.flexDirection = "column";
        flex.style.rowGap = "1px";

        flex.appendChild(document.createElement("div"));
        flex.appendChild(document.createElement("div"));

        document.body.appendChild(flex);

        const isSupported = flex.scrollHeight === 1;

        flex.parentNode.removeChild(flex);

        if (!isSupported) {

            document.body.classList.add("no-flexbox-gap");

        }

    }

    checkFlexGap();

});