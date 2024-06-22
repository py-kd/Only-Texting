$(document).ready(function() {
      $('.owl-carousel').owlCarousel({
            items: 1,
            margin: 10,
            loop: true,
            nav: true,
            // center: true,
            // stagePadding: 130,
            rtl: false,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            // animateOut: 'slideInLeft',
            // animateOut: 'slideOutDown',
            // animateIn: 'zoomIn',
            // animateOut: 'rollOut',
            responsive:{
                0:{
                    items: 1
                },
                600:{
                    items: 1
                },
                1000:{
                    items: 1
                }
            }
        })
});