// // const SECTION_1 = document.querySelector("#section1");//assigns section1 to const variable
// // const SECTION_2 = document.querySelector("#section2");//assigns section2 to const variable
// // const SECTION_3 = document.querySelector("#section3");//assigns section3 to const variable
// const LANDING_CONTAINER = document.querySelectorAll(".landing__container");//gets sections in order to iterate for selection
// let activeClass = document.getElementsByClassName("active");//gets the active section

// // for(i = 0; i < LANDING_CONTAINER.length; i++) {
// //   //add onclick to display class "active" section
// // };

// const SECTIONS = Array.from(LANDING_CONTAINER);
// // console.log(SECTIONS);
// // console.log(LANDING_CONTAINER);
// LANDING_CONTAINER.forEach( e => {
//   console.log(e.dataset)
// });

// const SECTION = document.querySelectorAll("section");
// SECTION.forEach( e => {
//   // const active = document.getElementsByClassName("active-section");
//   const nav = (e.dataset.nav);
//   console.log(nav);
//   // if(active){
//   //   console.log(nav);
//   // }
// });

//use landing container to display or not display?
//use active class to display or not display?

const SECTION = document.querySelectorAll("section");
SECTION.forEach( e => {
  const NAV = (e.classList.contains("active"));
  return (true);
});

console.log(e);