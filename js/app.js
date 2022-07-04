const NAV_BAR = document.querySelector('#navbar__list');
// console.log(NAV_BAR);//!VERIFY
const NAV_SECTIONS = document.querySelectorAll('section');
console.log(NAV_SECTIONS);//!VERIFY

const nav_menu_items = () => {
  let navMenu = '';

NAV_SECTIONS.forEach(section => {

     const SECTION_NUMBER = section.id;
    //  console.log(SECTION_NUMBER);//!VERIFY
     const SECTION_ATTRIBUTE = section.dataset.nav;
     navMenu += `<li> <a class="dynamic_menu" href="#${SECTION_NUMBER}">${SECTION_ATTRIBUTE}</a></li>`;   
   });
NAV_BAR.innerHTML=navMenu;
};

nav_menu_items();

const OBSERVER = new IntersectionObserver(entries => {
  // console.log(entries); //!VERIFY
  entries.forEach(entry => {
    entry.target.classList.toggle("active", entry.isIntersecting);
    // if (entry.isIntersecting) OBSERVER.unobserve(entry.target)//!VERIFY
  });
},
{
  threshold: 0.7
});

NAV_SECTIONS.forEach(NAV_SECTIONS => {
  OBSERVER.observe(NAV_SECTIONS);
});