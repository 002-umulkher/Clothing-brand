// 📞 Your WhatsApp number (use country code, no +)
const phoneNumber = "254712345678"; // <-- replace with yours

/* ================= WHATSAPP FUNCTIONS ================= */

// From product cards
function orderWhatsApp(product) {
  const message = encodeURIComponent(
    `Hi, I want to order: ${product}`
  );
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}

// From contact form
function sendToWhatsApp() {
  const name = document.querySelector('input[type="text"]').value.trim();
  const email = document.querySelector('input[type="email"]').value.trim();
  const message = document.querySelector('textarea').value.trim();

  if (!name || !message) {
    alert("Please enter your name and message");
    return;
  }

  const fullMessage = encodeURIComponent(
    `Hello, my name is ${name}\nEmail: ${email}\n\n${message}`
  );

  window.open(`https://wa.me/${phoneNumber}?text=${fullMessage}`, "_blank");
}

/* ================= SCROLL ================= */

function scrollToProducts() {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
}

/* ================= ANIMATIONS ================= */

const faders = document.querySelectorAll(".fade-in");
const productSection = document.querySelector(".products");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

faders.forEach(el => observer.observe(el));

/* Stagger product cards */
if (productSection) {
  const cards = productSection.querySelectorAll(".product-card");

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
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

  cardObserver.observe(productSection);
}