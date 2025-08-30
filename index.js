document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector("#themeToggle");
    const contactForm = document.querySelector("#contactForm");
    const formMessage = document.querySelector("#formMessage");

    console.log(contactForm, formMessage);

    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            console.log("Toggle clicked");
            document.body.classList.toggle("dark-mode");

            const isDarkMode = document.body.classList.contains("dark-mode");
            toggleButton.setAttribute("aria-pressed", isDarkMode);
        });
    }

     if (contactForm && formMessage) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); 

            const name = document.querySelector("#name").value;
            const email = document.querySelector("#email").value;
            const message = document.querySelector("#message").value;

            console.log("Form submitted:", { name, email, message }); 

            if (name && email && message) {
                formMessage.style.display = 'block'; 

                console.log("Form is complete, success message displayed!"); 
            
            } else {
                alert("Please fill in all fields.");
            }
        });
    } else {
        console.log("Form or message element not found!");
    }
});
