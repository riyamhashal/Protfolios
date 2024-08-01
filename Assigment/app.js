function adjustLayout() {
    const navbar = document.querySelector('.navbar');
    const panel = document.querySelector('.panel');
    const heroSection = document.querySelector('.hero-section');

    if (window.innerWidth <= 768) {
        navbar.classList.add('responsive');
        panel.classList.add('responsive');
        heroSection.classList.add('responsive');
    } else {
        navbar.classList.remove('responsive');
        panel.classList.remove('responsive');
        heroSection.classList.remove('responsive');
    }
}

// Initial check
adjustLayout();

// Adjust layout on window resize
window.addEventListener('resize', adjustLayout);

const button = document.querySelector("button");

button.forEach(button => {
    button.addEventListener("cilck", ()=> {
        const faq = button.nextElementSibling;
        faq.classList.toggle('show');
    })
    
});