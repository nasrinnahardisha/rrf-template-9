const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});







$(document).ready(function () {
  $(".testimonial-content").slick({
    arrows: true,
    prevArrow: '<button class="slick-prev">&#10094;</button>',
    nextArrow: '<button class="slick-next">&#10095;</button>',
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});




  
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 2000,
    viewFactor: 0.2 
};

ScrollReveal().reveal("#hero h3", {
    ...scrollRevealOption,
});



ScrollReveal().reveal("#hero h1", {
    ...scrollRevealOption,
    delay: 400,
});
ScrollReveal().reveal("#hero p", {
    ...scrollRevealOption,
    delay: 600,
});

ScrollReveal().reveal("#hero .hero-btn", {
    ...scrollRevealOption,
    delay: 800,
});

ScrollReveal().reveal("#hero img", {
    ...scrollRevealOption,
    origin: "right",
});


ScrollReveal().reveal("#about h2", {
    ...scrollRevealOption,
    origin: "right",
    delay: 1000,
});
ScrollReveal().reveal("#about p", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1200,
});
ScrollReveal().reveal("#services .para", {
    ...scrollRevealOption,
    origin: "right",
    delay: 1300,
});
ScrollReveal().reveal("#services h2", {
    ...scrollRevealOption,
    origin: "right",
    delay: 1400,
});
ScrollReveal().reveal("#services .services__items", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 1500,
});


ScrollReveal().reveal("#portfolio h2", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1700,
});
ScrollReveal().reveal("#portfolio p", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1900,
});

ScrollReveal().reveal(".portfolio", {
    ...scrollRevealOption,
    interval: 2000,
});

ScrollReveal().reveal("#skills h2", {
    ...scrollRevealOption,
    origin: "left",
    delay: 2200,
});
ScrollReveal().reveal("#skills p", {
    ...scrollRevealOption,
    origin: "left",
    delay: 2400,
});

ScrollReveal().reveal("#testimonials h2", {
    ...scrollRevealOption,
    origin: "top",
    delay: 2600,
});




document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    let started = false;

    function startCounting() {
        counters.forEach((counter) => {
            let target = +counter.getAttribute("data-target");
            let count = 0;
            let speed = target / 100; 
            let interval = setInterval(() => {
                count += speed;
                if (count >= target) {
                    counter.innerText = target + (counter.dataset.plus ? "+" : "");
                    clearInterval(interval);
                } else {
                    counter.innerText = Math.floor(count) + (counter.dataset.plus ? "+" : "");
                }
            }, 30);
        });
    }
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !started) {
            startCounting();
            started = true;
        }
    }, { threshold: 0.5 });

    observer.observe(document.querySelector("#about"));
});


$(document).ready(function () {
    function animateProgress() {
        $(".progress-container").each(function () {
            let $this = $(this);
            let progressBar = $this.find(".progress-bar");
            let progressText = $this.find(".progress-text");
            let targetWidth = progressBar.data("progress");

            progressBar.css("width", "0%"); 
            progressText.text("0%"); 

            progressBar.animate(
                { width: targetWidth + "%" },
                {
                    duration: 2000,
                    step: function (now) {
                        progressText.text(Math.ceil(now) + "%");
                    },
                }
            );
        });
    }

    let triggered = false;
    $(window).on("scroll", function () {
        let skillsOffset = $("#skills").offset().top - window.innerHeight + 100;
        if (!triggered && $(window).scrollTop() > skillsOffset) {
            animateProgress();
            triggered = true;
        }
    });
});
