let menubtn = document.querySelector("#menu-btn");
let header = document.querySelector(".header");

menubtn.onclick = () => {
  menubtn.classList.toggle("fa-times");
  header.classList.toggle("active");
};
window.onscroll = () => {
  menubtn.classList.remove("fa-times");
  header.classList.remove("active");
};

let signup = document.querySelector(".signup");
let signupbutton = document.querySelector(".signup-button");
let closebtn = document.querySelector("#close-btn");
signupbutton.onclick = () => {
  signup.classList.toggle("active");
  login.classList.remove("active");
};
closebtn.onclick = () => {
  signup.classList.remove("active");
};
let login = document.querySelector(".login");
let loginbutton = document.querySelector(".login-button");
let closebtn1 = document.querySelector("#close-btn-1");
loginbutton.onclick = () => {
  login.classList.toggle("active");
  signup.classList.remove("active");
};
closebtn1.onclick = () => {
  login.classList.remove("active");
};

let themetoggle = document.querySelector("#theme-toggle");

themetoggle.onclick = () => {
  themetoggle.classList.toggle("fa-sun");
  if (themetoggle.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};

var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".honeySwiper", {
  loop: true,
  effect: "flip",
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


let scrollbtn=document.querySelector('#arrow-icon');
window.onscroll=()=>{
  if (window.pageYOffset>200){
    scrollbtn.style.display='flex';
  }else{
    scrollbtn.style.display='none';

  }
}


