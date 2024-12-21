// Welcome Animation
document.addEventListener("DOMContentLoaded", () => {
    const welcomeText = document.getElementById("welcome");
    welcomeText.style.opacity = 0;
    welcomeText.style.transform = "translateY(-20px)";
    setTimeout(() => {
        welcomeText.style.opacity = 1;
        welcomeText.style.transform = "translateY(0)";
        welcomeText.style.transition = "all 0.6s ease-out";
    }, 500);
});

// Progress Bar Animation
const progressBars = document.querySelectorAll(".progress-fill");
progressBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = 0;
    setTimeout(() => {
        bar.style.width = width;
        bar.style.transition = "width 1.5s ease-out";
    }, 500);
});
