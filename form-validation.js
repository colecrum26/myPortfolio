document.getElementById("contactForm").addEventListener("submit", (event) => {
    if (!isValid) {
        event.preventDefault();
    }
});