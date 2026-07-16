/*=========================================
        BOTÓN VOLVER ARRIBA
=========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        topBtn.style.display="flex";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*=========================================
        MENÚ ACTIVO
=========================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/*=========================================
        APARICIÓN SUAVE
=========================================*/

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".project-card,.skill-card,.education-card,.timeline-item,.contact-item").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

/*=========================================
        ANIMACIONES
=========================================*/

.hidden{

    opacity:0;

    transform:translateY(50px);

    transition:all .8s ease;

}

.show{

    opacity:1;

    transform:translateY(0);

}

/*=========================================
        MENÚ ACTIVO
=========================================*/

nav a.active{

    color:var(--azul);

}

nav a.active::after{

    width:100%;

}