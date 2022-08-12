$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true, 
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
var btnframe=document.getElementById("btnframe");
var reservation=document.getElementById("reservation");
var navbar=document.getElementById("navbar").offsetHeight;

btnframe.addEventListener('click', function(){
    iframe.style.display="block";
    reservation.style.display="none";
    btnframe.style.display="none";
})
if(navbar>30){
    navbar.style.background='#fff';
    navbar.style.color='#000';
}