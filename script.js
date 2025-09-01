document.addEventListener("DOMContentLoaded", function () {
    const fadeInSections = document.querySelectorAll(".fade-in");

    function checkScroll() {
        fadeInSections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.9) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
