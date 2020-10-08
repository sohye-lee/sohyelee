
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