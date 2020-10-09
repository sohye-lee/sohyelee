
'use strict';


// navbar color change with scroll down
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

// Handle scrolling with click on navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    } else {
        const scrollTo = document.querySelector(link);
        scrollTo.scrollIntoView({behavior: 'smooth'});
    }
})

// Handle scrolling with click on contact button on Home
const contactBtn = document.querySelector(".home__contact");
const contactPopup = document.querySelector(".contact__popup");
contactBtn.addEventListener('click', () => {
    contactPopup.classList.remove('hide');
})

const closeBtn = document.querySelector(".popup__close");
closeBtn.addEventListener('click', () => {
    contactPopup.classList.add('hide');
})

// Sections fading out when scroll down 
const homeSection = document.querySelector("#home"),
      aboutSection = document.querySelector("#about"),
      skillSection = document.querySelector("#skills"),
      projectSection = document.querySelector("#projects"),
      referenceSection = document.querySelector("#references");

console.log(homeSection.children[0]);

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

// skill value bar triggered when scroll down to the page
document.addEventListener('scroll', function (e) {
    var top  = window.pageYOffset + window.innerHeight,
        itemTop = document.querySelector('#skills').offsetTop,
        isVisible = top > itemTop,
        valueList = document.querySelectorAll('#skill__value');
  
     if (isVisible) {
        valueList.forEach(function(item) {
           item.classList.add("skill__value");
        });
    }
});

// project : hover project --> skills glow
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
    // var project = projects[i],
    //     pjArray = arrays[i];
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



