document.addEventListener("DOMContentLoaded", () => {

    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    if(localStorage.getItem("theme") === "dark"){
        body.classList.add("dark-mode");
    }

    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if(body.classList.contains("dark-mode")){
            localStorage.setItem("theme","dark");
        }else{
            localStorage.setItem("theme","light");
        }
    });

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){
            navbar.classList.add("scrolled");
        }else{
            navbar.classList.remove("scrolled");
        }

    });

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 300){
            backToTop.style.display = "block";
        }else{
            backToTop.style.display = "none";
        }

    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });

});