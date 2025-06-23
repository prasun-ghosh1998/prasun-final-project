

AOS.init();


// scrolling sec

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// navbar

const navcontent = document.querySelector(".nav-content");

function openNav() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 767) {
    // Mobile screen
    navcontent.style.width = "100vw";
  } else {
    // Desktop/tablet
    navcontent.style.width = "54vw";
  }
}

function closeNav() {
  navcontent.style.width = "0";
}

// counter sec

const counters = document.querySelectorAll('.counter');

const speed = 300; // lower is faster

counters.forEach(counter => {
  const animate = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText.replace(/\D/g, ''); // remove non-digits
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment) + (target >= 1000 ? 'k' : '+');
      setTimeout(animate, 20);
    } else {
      counter.innerText = target + (target >= 1000 ? 'k' : '+');
    }
  };

  animate();
});



// team sec

const swiper1 = new Swiper('#swiper1', {
  loop: true,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: '#swiper-pagination1',
  },
  navigation: {
    nextEl: '#swiper-button-next1',
    prevEl: '#swiper-button-prev1',
  },
  autoplay: {
    delay: 2300,
  },

  breakpoints: {
    1440: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    973: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    425: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

  },

});


// client revew

const swiper2 = new Swiper('#swiper2', {
  loop: true,
  // slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 10,

  pagination: {
    el: '#swiper-pagination2',
  },
  navigation: {
    nextEl: '#swiper-button-next2',
    prevEl: '#swiper-button-prev2',
  },
  autoplay: {
    delay: 2600,
  },

});


// FAQ Jquery

$(document).ready(function () {
  $(".flip").click(function () {
    $(this).next(".panel").slideToggle("slow");
    
    $(this).find(".arrow").toggleClass("rotate");
  });
});

