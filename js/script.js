$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});
$('.intro .owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
$('.clients .owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});