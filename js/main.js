// Exécution du script après le chargement complet de la page
document.addEventListener("DOMContentLoaded", () => {
// Gestion du mode sombre (Dark Mode)
    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;
// Récupération du thème sauvegardé dans le navigateur
    if(localStorage.getItem("theme") === "dark"){
        body.classList.add("dark-mode");
    }
// Changement du thème lors du clic sur le bouton
    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if(body.classList.contains("dark-mode")){
            localStorage.setItem("theme","dark");
        }else{
            localStorage.setItem("theme","light");
        }
 // Affichage automatique de l'année dans le footer       
    });

    document.getElementById("year").textContent = new Date().getFullYear();
  // Effet visuel sur la barre de navigation lors du défilement  
});
    const navbar = document.querySelector(".navbar");
// Ajout ou suppression de la classe "scrolled" selon la position de la page
    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){
            navbar.classList.add("scrolled");
        }else{
            navbar.classList.remove("scrolled");
        }
// Gestion du bouton "Retour en haut"
    });
    const backToTop = document.getElementById("backToTop");
// Affiche le bouton lorsque l'utilisateur descend dans la page
    window.addEventListener("scroll", () => {

        if(window.scrollY > 300){
            backToTop.style.display = "block";
        }else{
            backToTop.style.display = "none";
        }
// Retour fluide vers le haut de la page
    });
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
// Animation des compteurs statistiques
const counters = document.querySelectorAll(".counter");
// Déclenche l'animation lorsque les compteurs deviennent visibles
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;
            const target = +counter.dataset.target;
            let current = 0;
// Lance l'animation de chaque compteur
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
// Observation de tous les compteurs
counters.forEach(counter => {
    counterObserver.observe(counter);
});

// Animation d'apparition progressive des sections
const sections = document.querySelectorAll(".fade-in");
// Ajoute la classe "show" lorsque la section devient visible
const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});
// Observation de toutes les sections animées
sections.forEach(section => {
    sectionObserver.observe(section);
});
// Vérification du nombre de compteurs trouvés
console.log("Compteurs trouvés :", counters.length);
/*filtrage*/ 
// Filtrage dynamique des freelances par catégorie
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".freelance-card");
// Affiche uniquement les freelances correspondant au filtre sélectionné
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
// Validation du formulaire de contact
const form = document.querySelector("form");
// Récupération des champs du formulaire
const nameInput = document.getElementById("name");
const firstnameInput = document.getElementById("firstname");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
// Récupération des zones d'affichage des erreurs
const nameError = document.getElementById("nameError");
const firstnameError = document.getElementById("firstnameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
// Zone d'affichage du message de succès
const successMsg = document.getElementById("successMsg");
// Vérification des champs lors de l'envoi du formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  // reset erreurs 
  // Réinitialisation des messages d'erreur
  nameError.textContent = "";
  firstnameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMsg.textContent = "";

  // NOM
  // Vérification du champ Nom
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
  // Vérification de la longueur minimale du message
  if (messageInput.value.trim().length < 20) {
    messageError.textContent = "Minimum 20 caractères requis";
    valid = false;
  }

  // SUCCESS
  // Affichage du message de succès si tous les champs sont valides
  if (valid) {
    successMsg.textContent = "Message envoyé avec succès ✅";
    form.reset();
  }
});
