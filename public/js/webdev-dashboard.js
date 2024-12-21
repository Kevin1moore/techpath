document.addEventListener("DOMContentLoaded", () => {
    const welcomeText = document.querySelector(".welcome-section h1");
    welcomeText.style.opacity = 0;
    welcomeText.style.transform = "translateY(-20px)";
    setTimeout(() => {
        welcomeText.style.opacity = 1;
        welcomeText.style.transform = "translateY(0)";
        welcomeText.style.transition = "all 0.5s ease-out";
    }, 300);

    // Add more animations or dynamic content loading as needed.
});
