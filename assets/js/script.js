$('#line').click(function(){
    $('#nav').addClass('open');

})
$('#cros').click(function(){
    $('#nav').removeClass('open');
    
})






$('.owl-banner').owlCarousel({
 loop:true,
 margin:10,
 nav:true,
 autoplay:true,
 autoplayHoverPause:true,
 animateOut:'fadeOut',
 smartSpeed:300,
 autoplayTimeout:3000,
 responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:1
    }
}
})