const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-list");

const list = document.querySelectorAll(".list-link");


navToggle.addEventListener("click", () => {
    nav.classList.toggle("nav--visible");
});

