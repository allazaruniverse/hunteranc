document.addEventListener("DOMContentLoaded", () => {
    // Variables
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Event listener
    form.addEventListener("submit", (event) => {
        if (!emailInput.value.includes("@")) {
            alert("Please enter a valid email.");
            event.preventDefault();
        }
        if (passwordInput.value.length < 8) {
            alert("Password must be at least 8 characters long.");
            event.preventDefault();
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");
    const button = dropdown.querySelector(".btn");
    const menu = dropdown.querySelector(".dropdown-content");

    let timeout;

    // Function to show dropdown
    function showDropdown() {
        clearTimeout(timeout);
        menu.style.display = "block";
    }

    // Function to hide dropdown with delay
    function hideDropdown() {
        timeout = setTimeout(() => {
            menu.style.display = "none";
        }, 300); // Adds delay to prevent flickering and fucking off when the cursor moves
    }

    // Show dropdown when hovering over button or menu
    button.addEventListener("mouseenter", showDropdown);
    menu.addEventListener("mouseenter", showDropdown);

    // Hide dropdown when mouse leaves BOTH button and menu
    button.addEventListener("mouseleave", hideDropdown);
    menu.addEventListener("mouseleave", hideDropdown);
});
