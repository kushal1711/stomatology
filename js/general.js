$(document).ready(function(){
// toggle menu js 

$('.nav-toggle').click(function(e){
    e.preventDefault();
    $('.nav-toggle').toggleClass('active');
    $('.nav-menu').toggleClass('active');
})

//home banner slider js

$('.hmbanner').owlCarousel({
   loop:true,
   nav :true,
   navText :["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
   items:1,
   autoplay:true,
   autoplayTimeout:4000,
   animateOut: 'fadeOut',
   dots:false
})

// clinic slider js 

$('.clinic').owlCarousel({
    loop:false,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    margin:10,
    dots:false,
    arrow:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})

// Magnific Popup js 

$('.mfpgallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] 
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    }
});

// Services slider js 

$('.services').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    dots:false,
    arrow:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})

//offer slider js 

$('.offer').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:6000,
    arrow:false,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        575:{
            items:2
        },
        1000:{
            items:5
        }
    }
})

//blog slider js 

$('.blog').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    arrow:false,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        575:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
});            