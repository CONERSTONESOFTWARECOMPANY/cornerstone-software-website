// Example for form submission
document.addEventListener('DOMContentLoaded', () => {
    
// Hero slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Button interactions
document.getElementById("getStartedBtn").addEventListener("click", () => {
  alert("Getting started with Prime Web!");
});

document.getElementById("learnMoreBtn").addEventListener("click", () => {
  alert("Learn more about our custom software solutions.");
});

document.getElementById("contactBtn").addEventListener("click", () => {
  alert("Contact us today to discuss your project!");
});

    const form = document.querySelector('#contactForm');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = {
                name: form.name.value,
                email: form.email.value,
                message: form.message.value
            };
            try {
                const res = await fetch('http://localhost:5000/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                const data = await res.json();
                alert(data.message);
            } catch (err) {
                alert('Error sending message');
            }
        });
    }
});


















