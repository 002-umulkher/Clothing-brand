const phoneNumber = "254712345678"; // replace

// WhatsApp
function openWhatsApp() {
  const message = encodeURIComponent(
    "Hello, I'm interested in your abayas."
  );
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}

function orderWhatsApp(product) {
  const message = encodeURIComponent(
    `Hi, I want to order: ${product}`
  );
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}

// Smooth scroll
function scrollToProducts() {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
}

/* ================= SCROLL ANIMATIONS ================= */

const faders = document.querySelectorAll(".fade-in");
const cards = document.querySelectorAll(".product-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

faders.forEach(el => observer.observe(el));

/* Stagger product cards */
const cardObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const cards = entry.target.querySelectorAll(".product-card");
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
          card.style.transition = "0.5s ease";
        }, index * 150);
      });
    }
  });
}, { threshold: 0.2 });

const productSection = document.querySelector(".products");
if (productSection) {
  cardObserver.observe(productSection);
}