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
    document.getElementById("year").textContent = new Date().getFullYear();
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
/*filtrage*/
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".freelance-card");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    cards.forEach(card => {
      const category = card.dataset.category;

      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
const form = document.querySelector("form");

const nameInput = document.getElementById("name");
const firstnameInput = document.getElementById("firstname");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const firstnameError = document.getElementById("firstnameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  // reset erreurs
  nameError.textContent = "";
  firstnameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMsg.textContent = "";

  // NOM
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Le nom est obligatoire";
    valid = false;
  }
  //prenom
  if (firstnameInput.value.trim() === "") {
    firstnameError.textContent = "Le prenom est obligatoire";
    valid = false;
  }

  // EMAIL
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = "Email invalide";
    valid = false;
  }

  // MESSAGE
  if (messageInput.value.trim().length < 20) {
    messageError.textContent = "Minimum 20 caractères requis";
    valid = false;
  }

  // SUCCESS
  if (valid) {
    successMsg.textContent = "Message envoyé avec succès ✅";
    form.reset();
  }
});
