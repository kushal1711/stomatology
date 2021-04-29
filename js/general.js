// toggle menu js 

(function($){
    $('.nav-toggle').click(function(e){
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.nav-menu').toggleClass('active');
    })
})(jQuery);

// Owl slider js 

$(document).ready(function(){
//home banner slider js

$('.hmbanner').owlCarousel({
   loop:true,
   nav :true,
   navText :["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
   items:1,
   dots:false
})
// Services slider js 

$('.services').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    arrow:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
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
    arrow:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
});            


