
const navLinks = document.querySelectorAll('.topbar__nav__center a')

/*============ algoritmo per aggiungere la classe active al click dei link della navbar ============*/
navLinks.forEach((link, index)=>{
    link.addEventListener("click", ()=>{
        if(!link.classList.contains('active')){
            link.classList.toggle('active')
        }
        for(let i=0; i< navLinks.length; i++){
            if(i!=index)
                navLinks[i].classList.remove('active')
        }
    })
})