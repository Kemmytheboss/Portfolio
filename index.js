document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector("#themeToggle");
    const contactForm = document.querySelector("#contactForm");
    const formMessage = document.querySelector("#formMessage");

    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            console.log("Toggle clicked");
            document.body.classList.toggle("dark-mode");

            // Update aria-pressed for accessibility
            const isDarkMode = document.body.classList.contains("dark-mode");
            toggleButton.setAttribute("aria-pressed", isDarkMode);
        });
    }

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Hide the form and show a success message
            contactForm.style.display = 'none';
            formMessage.style.display = 'block';
        });
    }
});
