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
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;
            const target = +counter.dataset.target;
            let current = 0;

            const updateCounter = () => {

                const increment = target / 100;

                if(current < target){
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
            counterObserver.unobserve(counter);
        }
    });
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});


const sections = document.querySelectorAll(".fade-in");

const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {
    sectionObserver.observe(section);
});

console.log("Compteurs trouvés :", counters.length);