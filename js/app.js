// //CHECK! DOM for sections
// // const TEST = event.target.firstChild.nodeValue
// //CHECK! return boolean for active class query
// // GET_SECTION.forEach(e => {
// //   const NAV = (e.classList.contains("active"));
// //   console.log(NAV); 
// //   console.log(e);
// // });
// // var names = GET_ID;//VERIFY! working function
// // console.log(names);
// GET_ID.forEach(e => {
//   const NAV_DATA = e.dataset.nav;
//   // console.log(NAV_DATA);
//   let print = NAV_DATA.toString();
//   console.log(print); //String type
// let list = document.createElement('ul'); //create a ul
// print.forEach(pintLi) {
//   print.forEach(myFunction);
//   document.document.querySelectorAll('[id*="section"]').innerHTML = text;
//   function myFunction(item, index) {
//     text += index + ": " + item + "<br>"; 
//   }
//   }
// } // CREATE SECTION NAMES FROM DATA-NAV
// // let list = document.createElement('ul'); //create a ul
// // names.forEach(function (names) {
// // 	var li = document.createElement('li');
// // 	li.textContent = names;
// // 	list.appendChild(li);
// // });
// // let navBar = document.querySelector('#navbar__list');
// // navBar.appendChild(list);

// const GET_ID = document.querySelectorAll('[id*="section"]');
// // console.log(GET_ID); //VERIFY! GET_ID FOR ACTIVE
// // const visibleSectionIndex = getVisibleSectionIndex();
// // console.log(visibleSectionIndex);
// GET_ID.forEach(e => {
// const NAV_DATA = e.dataset.nav;
// console.log(NAV_DATA);
// });

const NAV_BAR = document.querySelector('#navbar__list');
// console.log(NAV_BAR);//!VERIFY
const NAV_SECTIONS = document.querySelectorAll('section');
// console.log(NAV_SECTIONS);//!VERIFY

const nav_menu_items = () => {
  let navMenu = '';

NAV_SECTIONS.forEach(section => {

     const SECTION_NUMBER = section.id;
    //  console.log(SECTION_NUMBER);
     const SECTION_ATTRIBUTE = section.dataset.nav;
     navMenu += `<li> <a class="menu_item_link" href="#${SECTION_NUMBER}">${SECTION_ATTRIBUTE}</a></li>`   
   })
NAV_BAR.innerHTML=navMenu;
}
nav_menu_items();