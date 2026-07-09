document.getElementById("year").textContent=new Date().getFullYear();const b=document.getElementById("menu"),n=document.querySelector(".links");b.addEventListener("click",()=>n.classList.toggle("open"));document.querySelectorAll(".links a").forEach(a=>a.addEventListener("click",()=>n.classList.remove("open")));
const moreBtn=document.getElementById("showMoreCerts"),hiddenCerts=document.querySelectorAll(".hidden-cert");let certsOpen=false;moreBtn.addEventListener("click",()=>{certsOpen=!certsOpen;hiddenCerts.forEach(c=>c.style.display=certsOpen?"block":"none");moreBtn.textContent=certsOpen?"Show Less":"Show More Certificates";});const modal=document.getElementById("certificateModal"),modalImg=document.getElementById("modalImage");document.querySelectorAll(".certificate-card").forEach(c=>c.addEventListener("click",()=>{modalImg.src=c.dataset.src;modal.classList.add("open");}));function closeModal(){modal.classList.remove("open");modalImg.src="";}document.getElementById("modalClose").addEventListener("click",closeModal);modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
/* =====================================================
   SCROLL REVEAL ANIMATIONS
===================================================== */

const revealElements = document.querySelectorAll(
    "section .tag, section h2, .wide, .lead, .featured, .grid article, .stats div, .cert-intro, .certificate-card, .contact p"
);

revealElements.forEach((element, index) => {

    element.classList.add("reveal");

    /*
    Small stagger delay for cards.
    Delay is limited so later elements don't wait too long.
    */

    const delay = (index % 4) * 100;

    element.style.transitionDelay = `${delay}ms`;
});


const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                /*
                Animate only once.
                Remove this line if you want animation
                every time the user scrolls back.
                */

                revealObserver.unobserve(entry.target);
            }

        });

    },

    {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px"
    }

);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =====================================================
   BACKGROUND COLOR CHANGE ON SCROLL
===================================================== */

const sections = document.querySelectorAll("main section");


const backgroundClasses = [

    "bg-dark",
    "bg-navy",
    "bg-green",
    "bg-blue",
    "bg-deep"

];


const backgroundObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const sectionsArray = Array.from(sections);

                const sectionIndex =
                    sectionsArray.indexOf(entry.target);


                const backgroundClass =
                    backgroundClasses[
                        sectionIndex %
                        backgroundClasses.length
                    ];


                document.body.classList.remove(
                    ...backgroundClasses
                );


                document.body.classList.add(
                    backgroundClass
                );

            }

        });

    },

    {
        threshold: 0.35
    }

);


sections.forEach((section) => {

    backgroundObserver.observe(section);

});


/* =====================================================
   SUBTLE HERO PARALLAX
===================================================== */

const hero = document.querySelector(".hero");

const heroTitle = document.querySelector(".hero h1");


window.addEventListener(
    "scroll",
    () => {

        if (!hero || !heroTitle) return;


        const scrollPosition = window.scrollY;


        /*
        Only animate while near hero section.
        Prevent unnecessary work further down page.
        */

        if (scrollPosition < window.innerHeight) {

            heroTitle.style.transform =
                `translateY(${scrollPosition * 0.08}px)`;


            heroTitle.style.opacity =
                Math.max(
                    1 - scrollPosition / 900,
                    0.25
                );

        }

    },

    {
        passive: true
    }
);