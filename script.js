// ============================
// Smooth Scroll Navigation
// ============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const targetSection = document.querySelector(
            this.getAttribute("href")
        );

        targetSection.scrollIntoView({

            behavior: "smooth"

        });

    });

});



// ============================
// Hero Button
// ============================

const heroBtn = document.getElementById("heroBtn");

heroBtn.addEventListener("click", () => {

    document
        .getElementById("contact")
        .scrollIntoView({

            behavior: "smooth"

        });

});



// ============================
// Contact Form
// ============================

const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const messageInput = document.getElementById("message");

const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = nameInput.value.trim();

    const email = emailInput.value.trim();

    const message = messageInput.value.trim();

    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill in all fields.";

        formMessage.style.color = "red";

        return;

    }

    formMessage.textContent =
        "Message sent successfully!";

    formMessage.style.color = "green";

    form.reset();

});
