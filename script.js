// Get references to the menu elements
const menuToggle = document.getElementById('menu-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

// Add a click event listener to the hamburger icon
menuToggle.addEventListener('click', () => {
    // Toggle the 'active' class on the menu to show/hide it
    navbarMenu.classList.toggle('active');
});

// Function to switch images and styles to showcase strawberry juice
function imgSlider() {
    // Change image sources
    document.querySelector('.juice-can').src = "./images/juice1.png";
    document.querySelector('.l1').src = "./images/strawberry.png";
    document.querySelector('.l2').src = "./images/strawberry.png";
    document.querySelector('.l3').src = "./images/strawberry.png";
    document.querySelector('.l4').src = "./images/strawberry.png";
    document.querySelector('.l5').src = "./images/strawberry.png";
    document.querySelector('.l6').src = "./images/strawberry.png";

    // Change background image and additional styles
    document.body.style.backgroundImage = "url(./images/strawback.png)";
    document.querySelector('.move-can').src = "./images/juice1.png";
    document.querySelector('.move-can2').src = "./images/juice1.png";
    
    // Show/hide content related to strawberry
    document.getElementById("mangocn").style.display = "none";
    document.getElementById("strawcn").style.display = "inline";
    document.getElementById("mangoh").style.display = "none";
    document.getElementById("strawh").style.display = "inline";
    document.getElementById("mangocn2").style.display = "none";
    document.getElementById("strawcn2").style.display = "inline";
};

// Function to switch images and styles to showcase mango juice
function imgSlider2() {
    // Change image sources
    document.querySelector('.juice-can').src = "./images/juice2.png";
    document.querySelector('.l1').src = "./images/mango.png";
    document.querySelector('.l2').src = "./images/mango.png";
    document.querySelector('.l3').src = "./images/mango.png";
    document.querySelector('.l4').src = "./images/mango.png";
    document.querySelector('.l5').src = "./images/mango.png";
    document.querySelector('.l6').src = "./images/mango.png";

    // Change background image and additional styles
    document.body.style.backgroundImage = "url(./images/mangoback.png)";
    document.querySelector('.move-can').src = "./images/juice2.png";
    document.querySelector('.move-can2').src = "./images/juice2.png";
    
    // Show/hide content related to mango
    document.getElementById("mangocn").style.display = "inline";
    document.getElementById("strawcn").style.display = "none";
    document.getElementById("mangoh").style.display = "inline";
    document.getElementById("strawh").style.display = "none";
    document.getElementById("mangocn2").style.display = "inline";
    document.getElementById("strawcn2").style.display = "none";
};

// Timeline animation for juice image in section 1 on scroll
let tl = gsap.timeline();
const scrldown = tl.fromTo(".move-can", {
    x: "-100vw",
    duration: 2,
    ease: "none",
}, {
    x: "0",
    ease: "none",
});

// ScrollTrigger for the animation in section 1
ScrollTrigger.create({
    trigger: ".section-1",
    start: "top 20%",
    end: "top 20%",
    animation: scrldown,
    scrub: 1,
    // markers: true
});

// Timeline animation for juice image in section 2 on scroll
let tll = gsap.timeline();
const scrldownn = tll.fromTo(".move-can2", {
    x: "100vw",
    duration: 2,
    ease: "none",
}, {
    x: "0vw",
    ease: "none",
});

// ScrollTrigger for the animation in section 2
ScrollTrigger.create({
    trigger: ".section-2",
    start: "top 20%",
    end: "top 20%",
    animation: scrldownn,
    scrub: 1,
    // markers: true
});
