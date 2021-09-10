const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-list");

const list = document.querySelectorAll(".list-link");


navToggle.addEventListener("click", () => {
    nav.classList.toggle("nav--visible");

    setTimeout(function () {
        document.querySelector('.nav-list').style.display = 'none'
    }, 4000)
    setTimeout("location.reload(true);", 4000);
});

