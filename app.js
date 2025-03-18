// defilement fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});







// JavaScript pour ajouter des effets supplémentaires
document.addEventListener('DOMContentLoaded', function() {
    // Effet parallaxe pour l'arrière-plan
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        if (scrollPosition < window.innerHeight) {
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });
    
    // Animation au survol du bouton
    const btn = document.querySelector('.btn');
    btn.addEventListener('mouseover', function() {
        this.classList.add('hover');
    });
    
    btn.addEventListener('mouseout', function() {
        this.classList.remove('hover');
    });
});