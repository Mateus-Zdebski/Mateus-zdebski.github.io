ScrollReveal().reveal('.home-content', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    reset: true
});

ScrollReveal().reveal('.icon-button', {
    origin: 'bottom',
    distance: '20px',
    duration: 800,
    interval: 200,
    reset: true
});

ScrollReveal().reveal('#about img', {
    origin: 'left',
    distance: '50px',
    duration: 1200,
    reset: true
});

ScrollReveal().reveal('#about .custom-margin-about', {
    origin: 'right',
    distance: '50px',
    duration: 1200,
    reset: true
});

  // Inicializando ScrollReveal
  ScrollReveal().reveal('#timeline h2', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    reset: true
});

ScrollReveal().reveal('#timeline ol li', {
    origin: 'left',
    distance: '80px',
    duration: 1200,
    easing: 'ease-in-out',
    interval: 200, // intervalo entre cada item da lista
    reset: true
});

ScrollReveal().reveal('.service-card', {
    distance: '50px',
    origin: 'bottom',
    duration: 800,
    easing: 'ease-in-out',
    interval: 200
});

ScrollReveal().reveal('.skill-card', {
    distance: '60px',
    origin: 'left',
    duration: 900,
    easing: 'ease-in-out',
    interval: 150
});

ScrollReveal().reveal('.portfolio-card', {
    distance: '50px',
    origin: 'bottom',
    duration: 800,
    easing: 'ease-in-out',
    interval: 200
});

ScrollReveal().reveal('.contact-card', {
    distance: '30px',
    origin: 'right',
    duration: 700,
    easing: 'ease-in-out',
    interval: 150
});    

    document.getElementById("scrollToContact").addEventListener("click", function () {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
