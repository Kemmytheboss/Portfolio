document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector("#themeToggle");
    const contactForm = document.querySelector("#contactForm");
    const formMessage = document.querySelector("#formMessage");
    const closeBtn = document.querySelector(".close-btn");
    
    const body = document.body;

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (name && email && message) {
            // Show popup
            formMessage.classList.add("show");
            // Optional: reset form
            contactForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Close popup on "x"
    closeBtn.addEventListener("click", () => {
        formMessage.classList.remove("show");
    });

    // Close popup on outside click
    formMessage.addEventListener("click", (e) => {
        if (e.target === formMessage) {
            formMessage.classList.remove("show");
        }
    });

    // Theme toggle
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
        body.classList.toggle("light-theme");

        // Change button text/icon
        if (body.classList.contains("dark-theme")) {
            themeToggle.textContent = "☀️ Light Mode";
        } else {
            themeToggle.textContent = "🌙 Dark Mode";
        }
    });
});
console.log("Form submitted");
console.log("Theme toggled");