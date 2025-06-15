
// navbar

const hamber = document.querySelector(".hamberger");
const navcontent = document.querySelector(".nav-content");
const closenav = document.querySelector(".close-bar");

hamber.addEventListener("click", () => {
  console.log(navcontent.classList);
  navcontent.classList.toggle("active");
});
closenav.addEventListener("click", () => {
  console.log(navcontent.classList);
  navcontent.classList.toggle("active");
});


// team sec

const swiper = new Swiper('.swiper', {
  loop: true,
  centeredSlides: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
  },
  //   autoplay: {
  //     delay: 2000,
  //   },

  breakpoints: {
    1440:{
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024:{
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768:{
      slidesPerView: 2,
      spaceBetween: 30,
    },
    425:{
      slidesPerView: 1,
      spaceBetween: 30,
    },

  },


});



// client revew

const swiper2 = new Swiper('#swiper2', {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 10,

  pagination: {
    el: '.swiper-pagination',
  },
  //   autoplay: {
  //     delay: 2000,
  //   },


});

