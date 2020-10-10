
'use strict';


// =========== NAVBAR :  ============ //
const nav = document.querySelector("#navbar"),
      navMenu = document.querySelectorAll(".navbar__menu h3"),
      navHeight = nav.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > navHeight) {
        nav.classList.add("navbar-dark");
    } else  {
        nav.classList.remove("navbar-dark");
    }
});

// =========== NAVBAR : MOVE TO THE LINKED SECTION ============ //
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener('click', (event) => {
    const target = event.target,
          link = target.dataset.link;
    if (link == null) {
        return;
    } else {
        const scrollTo = document.querySelector(link);
        scrollTo.scrollIntoView({behavior: 'smooth'});
    }
})

// =========== HOME : CONTACT BUTTON OPENING A WINDOW ============ //
const contactBtn = document.querySelector(".home__contact"),
      contactPopup = document.querySelector(".contact__popup");
contactBtn.addEventListener('click', () => {
    contactPopup.classList.remove('hide');
})

const closeBtn = document.querySelector(".popup__close");
closeBtn.addEventListener('click', () => {
    contactPopup.classList.add('hide');
})

// =========== SCROLL : FADING OUT EFFECT WITH SCROLL ============ //
const homeSection = document.querySelector("#home"),
      aboutSection = document.querySelector("#about"),
      skillSection = document.querySelector("#skills"),
      projectSection = document.querySelector("#projects"),
      referenceSection = document.querySelector("#references");

document.addEventListener('scroll', () => {
    fadingOut(homeSection);
    fadingOut(aboutSection);
    fadingOut(skillSection);
    fadingOut(projectSection);
    fadingOut(referenceSection);
})

function fadingOut(section) {
    const sectionHeight = section.getBoundingClientRect().height;
    section.children[0].style.opacity =  1 - ((window.scrollY - section.offsetTop) / sectionHeight)*0.6;
}

// =========== ARROW UP : SCROLL TO THE HOME PAGE ============ //
const arrowUp = document.querySelector("#arrow__up"),
      homeHeight = document.querySelector("#home").getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY < homeHeight) {
        arrowUp.classList.remove("visible");
    } else {
        arrowUp.classList.add("visible");
    }
})

arrowUp.addEventListener('click', () => {
    const scrollTo = document.querySelector("#home");
    scrollTo.scrollIntoView({behavior: 'smooth'});
})


// =========== SKILLS : TRIGGERING PROGRESS BARS ============ //
document.addEventListener('scroll', function (e) {
    const top  = window.pageYOffset + window.innerHeight,
          itemTop = document.querySelector('#skills').offsetTop,
          isVisible = top > itemTop,
          valueList = document.querySelectorAll('#skill__value');
  
     if (isVisible) {
        valueList.forEach(function(item) {
           item.classList.add("skill__value");
        });
    }
});

// =========== PROJECT : FILTERING SKILLS FOR EACH PROJECT ============ //
const html = document.getElementById("html"),
      css = document.getElementById("css"),
      js = document.getElementById("js"),
      bootstrap = document.getElementById("bootstrap"),
      node = document.getElementById("node"),
      react = document.getElementById("react"),
      ython = document.getElementById("python");

const pjCamp = document.querySelectorAll("#pjCamp"),
      pjCampArray = [html, css, js, bootstrap, node, react],
      pjCafe = document.querySelectorAll("#pjCafe"),
      pjCafeArray = [html, css, node],
      pjTodo = document.querySelectorAll("#pjTodo"),
      pjTodoArray = [html, css, js],
      pjShop = document.querySelectorAll("#pjShop"),
      pjShopArray = [html, css, js, bootstrap, react],
      pjKite = document.querySelectorAll("#pjKite"),
      pjKiteArray = [html, css, js, bootstrap, react],
      pjJs = document.querySelectorAll("#pjJs"),
      pjJsArray = [html, css, js];

var projects = [pjCamp, pjCafe, pjTodo, pjShop, pjKite, pjJs],
    arrays = [pjCampArray, pjCafeArray, pjTodoArray, pjShopArray, pjKiteArray, pjJsArray];

for (let i = 0; i < projects.length; i++) {
    for (let a = 0; a < projects[i].length; a++) {
        projects[i][a].addEventListener("mouseenter", function() {
            arrays[i].forEach(function(item) {
                item.style.color="var(--color-white)";
            });
        });
        projects[i][a].addEventListener("mouseout", function() {
            arrays[i].forEach(function(item) {
                item.style.color="var(--color-darkgray";
            });
        });
    }
}

 
// =========== PROJECT : FILTERING PROJECT ============ //
const projectCategoryBtns = document.querySelector(".projects__categories"),
      projectsContainer = document.querySelector(".projects__projects"),
      projectsArray = document.querySelectorAll(".project");

projectCategoryBtns.addEventListener('click', (event) => {
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter ;
    if (filter == null) {
        return;
    } 

    projectsContainer.classList.add("anim-out");

    setTimeout(() => {
        projectsArray.forEach((project) => {
            const type = project.dataset.type;
            if (filter === "*" || type === filter || type === "*") {
                project.classList.remove("hide");
            } else {
                project.classList.add("hide");
            }
        })

        projectsContainer.classList.remove("anim-out");
    }, 300)
    
})


// =========== PROJECT : CATEGORY BTN SELECTED / NOT - TOGGLE ============ //
const categoryBtns = document.querySelectorAll(".category__btn");

projectCategoryBtns.addEventListener('click', (e) => {
    categoryBtns.forEach((btn) => {
        btn.classList.remove('selected');
    })
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parenNode;
    e.target.classList.add('selected')
})
      
