// ============================================
// CONFIGURAÇÕES DO RESTAURANTE
// ============================================

const restaurante = {

    nome: "Restaurante Executive Gastronomia",

    telefone: "554132836829",

    endereco:
        "R. Joaquim Ferreira Claudino, 350 - fundos, Cruzeiro, São José dos Pinhais - PR",

    horario:
        "Segunda a sexta — 11:00 às 15:00",

    maps:
        "https://maps.app.goo.gl/qAbsf2LRnFmdnsd49"

};


// ============================================
// ANIMAÇÃO AO ENTRAR NA TELA
// ============================================

const elementos = document.querySelectorAll(
    ".experience-card, .menu-card, .gallery-item, .info-item"
);


const observer = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);


elementos.forEach((elemento) => {

    elemento.classList.add("animate");

    observer.observe(elemento);

});


// ============================================
// MENU MOBILE
// ============================================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

});


// ============================================
// INFORMAÇÕES DO RESTAURANTE
// ============================================

const logoRestaurante = document.getElementById("logo-restaurante");
const eyebrowRestaurante = document.getElementById("eyebrow-restaurante");
const footerRestaurante = document.getElementById("footer-restaurante");

if (logoRestaurante) {
    logoRestaurante.textContent = restaurante.nome;
}

if (eyebrowRestaurante) {
    eyebrowRestaurante.textContent = restaurante.nome.toUpperCase();
}

if (footerRestaurante) {
    footerRestaurante.textContent = restaurante.nome;
}