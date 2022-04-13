const hovers = document.querySelectorAll(".hover");
const spanHovers = document.querySelectorAll(".span-hover");
const arrows = document.querySelectorAll(".arrow");
// console.log(hovers);

hovers.forEach(function(hover) {
  // console.log(hover);

  const hoverBtn = hover.querySelector(".hover-btn");
  const spanHover = hover.querySelector(".span-hover");
  const arrow = hover.querySelector(".arrow")
  // console.log(spanHover);
  // console.log(hoverBtn);


  hoverBtn.addEventListener('click', function() {
  
    spanHovers.forEach(function(item) {
      if (item !== spanHover) {
        item.classList.remove("open-hover");
      }
    })

    arrows.forEach(function (arr) {
      if(arr !== arrow) {
        arr.classList.remove("arrow-transform");
      }
    })
    
    if(spanHover.classList.contains("open-hover")) {
      spanHover.classList.remove("open-hover");
      arrow.classList.remove("arrow-transform");
    }
    else {
      spanHover.classList.add("open-hover");
      arrow.classList.add("arrow-transform");
    }
    console.log("btn click")
  })
})

const burgerBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".header__menu");

burgerBtn.addEventListener('click', function() {
  console.log("burger btn");
  burgerBtn.classList.toggle("toggle-burger");
  menu.classList.toggle("open-menu");

})
const links = document.querySelectorAll(".link");
// console.log(links);
const hoverLinks = document.querySelectorAll(".hover-link");
// console.log(hoverLinks);
const darkArrows = document.querySelectorAll(".arrow-dark");
// console.log(arrowDark);

links.forEach(function(link) {
  // console.log(link);

  const linkBtn = link.querySelector(".link-btn");
  const hoverLink = link.querySelector(".hover-link");
  const darkArrow = link.querySelector(".arrow-dark");

  // console.log(hoverLink);
  // console.log(linkBtn);

  linkBtn.addEventListener('click', function() {

    hoverLinks.forEach(function (item) {
      if (item !== hoverLink) {
        item.classList.remove("open-hover-link");
      }
    })

    darkArrows.forEach(function(arr) {
      if (arr !== darkArrow) {
        arr.classList.remove("dark-arrow-transform");
      }
    })
    
    if (hoverLink.classList.contains("open-hover-link")) {
      hoverLink.classList.remove("open-hover-link");
      darkArrow.classList.remove("dark-arrow-transform");
    }
    else {
      hoverLink.classList.add("open-hover-link");
      darkArrow.classList.add("dark-arrow-transform");
    }

    burgerBtn.addEventListener('click', function() {
      hoverLink.classList.remove("open-hover-link");
    })
  })
})