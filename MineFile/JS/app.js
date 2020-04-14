`use strict`
$(function() {
    
    

// nav scroll  -------------------
let scrollPos = $(window).scrollTop();
let header = $('.header');
let intro = $('.intro');
let introH = intro.innerHeight();
let nav = $('.navbar');
let burger = $('#navToggle');

    
    
$(window).on('scroll resize', function() {
    scrollPos = $(this).scrollTop();

    if (scrollPos > introH) {
        header.addClass('fixed');
    } else {
        header.removeClass('fixed');
        nav.removeClass('navbar-show');
        burger.removeClass('rotate');
    }
});


    
    
    

$('[data-scroll]').on('click', function(event) {
    event.preventDefault();
    
    let blockId = $(this).data('scroll');
    let elementOffset = $(blockId).offset().top;
    
    nav.removeClass('navbar-show');
    burger.removeClass('rotate');
    
    $("html, body").animate({
        scrollTop: elementOffset - 90 
    }, 500);
});

    
    


// nav menu ----------------------
burger.on('click', function() {
    let $this = $(this);
    
    if ($this.hasClass('rotate')) {
            $this.removeClass('rotate');
            $this.addClass('reverse');
            nav.removeClass('navbar-show');
        
        } else {
            if (!($this.hasClass('rotate'))) {
                $this.removeClass('reverse');
                $this.addClass('rotate');
                nav.addClass('navbar-show');
            }
        }
});
    


    
    
    
    
// servise block  ----------------
let icon = $('[data-icon]');
let block = $('.item__content');

icon.on('click', function (){
    //#block-
    let cat = $(this).data('icon'); 

    // icon shadow
    icon.removeClass('icon__shadow'); 
    $(this).addClass('icon__shadow');

    // content
    $('.item__content').hide();
    $(cat).fadeIn(800).css({'display':'flex'});
});


    
    
    
$('#reviewsSlider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    adaptiveHeight: true,
    responsive: [{
       breakpoint: 991,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false
       }
     }]
    });
});











