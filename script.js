
let bar = document.querySelector('.bar');
let nav = document.querySelector('nav');

bar.onclick = ()=>{
    nav.classList.toggle("navactive")
    bar.classList.toggle("fa-solid fa-xmark");
};

var swiper = new Swiper(".mySwiper1", {
    grabCursor:true,
    loop:true,
    autoHeight:true,
    centeredSlides:true,
    spaceBetween:30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },
        navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


    var swiper = new Swiper(".mySwiper", {
      grabCursor:true,
      cssMode: true,
      loop: true,
      centeredSlides:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      mousewheel: true,
      keyboard: true,
    });

    window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.querySelector(".header").classList.add("navscrolling");
    document.querySelector(".category .cards").classList.add("slideUp");
    document.querySelector("nav .h").classList.remove("activate");
    document.querySelector("nav .o").classList.remove("activate");
    document.querySelector("nav .c").classList.add("activate");
  }
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    document.querySelector(".grid").classList.add("slideUp");
    document.querySelector("nav .c").classList.remove("activate");
    document.querySelector("nav .p").classList.remove("activate");
    document.querySelector("nav .o").classList.add("activate");

  }  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    document.querySelector(".view").classList.add("slideUp");
    document.querySelector("nav .o").classList.remove("activate");
    document.querySelector("nav .p").classList.add("activate");

  }
  if (document.documentElement.scrollTop < 100){
    document.querySelector(".container").classList.remove("navscrolling");
    document.querySelector("nav .c").classList.remove("activate");
    document.querySelector("nav .h").classList.add("activate");

  }
}

