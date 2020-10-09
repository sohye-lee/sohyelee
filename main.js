
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



