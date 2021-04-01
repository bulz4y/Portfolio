
// Toggle Mobile Nav
const mobileNav = $('.mobile-nav');
const menuBars = $('.header__mobile-menu');

menuBars.on('click', function() {
    mobileNav.fadeToggle();
});

// Smooth Scroll in ms
const scrollSpeed = 1000;

$('.smooth-scroll-link').on('click', function() {
    const hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, scrollSpeed);
});

// Loader Screen
const loader = $('.loader');

window.addEventListener('load', function() {
    loader.css({display: 'none'});
}); 


