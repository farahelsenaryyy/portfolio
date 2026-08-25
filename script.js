const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("nav-open");
  menuBtn.classList.toggle("active");

  menuBtn.textContent = navLinks.classList.contains("nav-open") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("nav-open");
    menuBtn.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

const revealElements = document.querySelectorAll(
  ".section-heading, .about-text, .achievement-card, .skill-group, .timeline-item, .project-card, .cert-card, .education-card, .contact-card"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -2;
    const rotateY = ((x - centerX) / centerX) * 2;

    card.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-4px)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

const floatingCards = document.querySelectorAll(".floating-card");

floatingCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.5}s`;
});

const currentYear = new Date().getFullYear();

const footerText = document.querySelector(".footer p");

if (footerText) {
  footerText.innerHTML = `
    © ${currentYear} · Designed & built by
    <strong>Farah Elsenary</strong>
  `;
}