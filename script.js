// =========================
// Smooth Active Navigation
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// =========================
// Fade In Animation
// =========================

const cards = document.querySelectorAll(
".skill-card, .project-card, .experience-card"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

cards.forEach(card=>{

card.classList.add("hidden");

observer.observe(card);

});


// =========================
// Hero Typing Effect
// =========================

const title = document.querySelector(".hero-content h2");

const text =
"Information and Communication Technology Graduate";

let i = 0;

title.textContent = "";

function typeText(){

if(i < text.length){

title.textContent += text.charAt(i);

i++;

setTimeout(typeText,50);

}

}

window.onload = typeText;
