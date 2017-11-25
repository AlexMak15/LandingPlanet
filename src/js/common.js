//Menu
var topMenu = document.querySelector(".main-menu");
var MainMenuBtn = document.querySelector(".main-menu-btn");

    // Do something else, like open/close menu
    MainMenuBtn.addEventListener("click", function(){
        topMenu.classList.toggle("top-menu-visible");
    });
$(document).ready(function(){
    $('.main-menu-btn').click(function(){
        $(this).toggleClass('open');
    });
});

//Carousel
$(document).ready(function(){
$(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    navText: ["<i class='arrow-left'><img src='../img/top-slidera-rrow-left.png' alt=''></i>","<i class='arrow-right'><img src='../img/top-slidera-rrow-right.png' alt=''></i>"],
    nav: true,
    autoplay: true,
    autoplayTimeout: 40000,
    autoplaySpeed: 1000,
    fluidSpeed: true,
    autoplayHoverPause: true
});
});