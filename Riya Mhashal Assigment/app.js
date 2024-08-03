function adjustLayout (){
    const navbar = document.querySelector('.navbar');
    const panel = document.querySelector('.panel');
    const herosection = document.querySelector('.hersection');
}
if (window.innerwidth <= 768){
    navbar.classList.add ('responsive');
    panel.classList.add('responsive');
    herosection.classList.add('responsive');
} else {
    navbar.classList.remove ('responsive');
    panel.classList.remove('responsive');
    herosection.classList.remove('responsive');
}
adjustLayout ();

window.addEventListener('resize', adjustLayout);
const button = document.querySelector("button");

button.forEach(element => {
    button.addEventListener("click", () => {
        const faq=button.nextElementSibling;
        faq.classList.toggle('show');
    })
});