

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
    navcontent.style.width = "100vw";
    document.body.classList.add("menu-open");
  } else {
    navcontent.style.width = "54vw";
    document.body.classList.add("menu-open");
  }
}

function closeNav() {
  navcontent.style.width = "0";
  document.body.classList.remove("menu-open");
}

// signup from

const openBtn = document.getElementById("openSignup");
const closeBtn = document.getElementById("closeSignup");
const signupOverlay = document.getElementById("signupOverlay");

openBtn.addEventListener("click", () => {
  signupOverlay.classList.add("active");
  
  document.body.classList.add("menu-open");
  
});

closeBtn.addEventListener("click", () => {
  signupOverlay.classList.remove("active"); // removing display:flex and because of that the display:none comes into play
  document.body.classList.remove("menu-open"); //removing noscroll from the body so that you can scroll the website
});

// counter sec

const counters = document.querySelectorAll('.counter');

const startCounting = (counter) => {
  const target = +counter.getAttribute('data-target');
  const isK = target >= 1000;
  const suffix = isK ? 'k' : '+';
  const speed = 400;

  const animate = () => {
    let count = +counter.innerText.replace(/\D/g, '');
    const increment = Math.ceil(target / speed);

    if (count < target) {
      count += increment;
      if (count > target) count = target;
      counter.innerText = count + suffix;
      setTimeout(animate, 20);
    } else {
      counter.innerText = target + suffix;
    }
  };

  animate();
};

// Use IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounting(entry.target);
      observer.unobserve(entry.target); // only run once
    }
  });
}, {
  threshold: 0.6
});

counters.forEach(counter => observer.observe(counter));



// team sec

const swiper1 = new Swiper('#swiper1', {
  loop: true,
  centeredSlides: true,
  spaceBetween: 30,
  speed: 1000,
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
  spaceBetween: 30,
  speed: 1200,

  pagination: {
    el: '#swiper-pagination2',
  },
  navigation: {
    nextEl: '#swiper-button-next2',
    prevEl: '#swiper-button-prev2',
  },
  autoplay: {
    delay: 3000,
  },

});


// FAQ Jquery

$(document).ready(function () {
  $(".flip").click(function () {
    $(this).next(".panel").slideToggle("slow");
    $(this).find(".arrow").toggleClass("rotate");
    $(".flip").removeClass('active'); // remove active from all
    $(this).addClass('active'); // add to clicked
  });
});

