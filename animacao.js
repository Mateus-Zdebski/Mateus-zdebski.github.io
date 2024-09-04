document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const elementsToReveal = document.querySelectorAll('.reveal');
    
    const revealElement = (entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-animation');
            entry.target.classList.remove('reveal');
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(revealElement);
    }, { threshold: 0.2 });

    elementsToReveal.forEach((element) => {
        observer.observe(element);
    });

    // Button Click Animation
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('animate-click');
            setTimeout(() => button.classList.remove('animate-click'), 300);
        });
    });

    // Fade In Sections
    const sections = document.querySelectorAll('.fade');
    
    const fadeInSection = (entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade');
        }
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(fadeInSection);
    }, { threshold: 0.5 });

    sections.forEach((section) => {
        sectionObserver.observe(section);
    });
});
