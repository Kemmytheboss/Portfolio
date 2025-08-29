document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("themeToggle");
    const contactForm = document.getElementById("contactForm");

    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            console.log("Toggle clicked")
            document.body.classList.toggle("dark-mode");
        });
    }

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thanks for reaching out. I'll get back to you soon.");
        });
    }
});
