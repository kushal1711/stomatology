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
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
})
});            

// Magnific Popup js 

$(document).ready(function() {
	$('.mfpgallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});
});
