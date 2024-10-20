const h1 = document.querySelectorAll(".h1");
const accordionContents = document.querySelectorAll(".accordion-content");

h1.forEach((h1) => {
    h1.addEventListener(" click",() =>{
        const accordionItem = h1.parentElement;
        const accordionContent = accordionItem.querySelector(".accordion-content");
        
        accordionContent.forEach((content)=> {
            if (content !== accordionContent){
                content.classList.remove("active");
                content.style.maxHeight = "0";
            }
        });
        
        accordionContent.classList.toggle("active");

        if (accordionContent.classList.contains("active")){
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        }else {
            accordionContent.style.maxHeight = "0";
        }
        
    });
});