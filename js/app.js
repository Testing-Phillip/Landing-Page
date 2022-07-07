const NAV_BAR = document.querySelector('#navbar__list'); // creates const for dynamic navbar
const NAV_SECTIONS = document.querySelectorAll('section'); //creates const for section element data

const nav_menu_items = () => {
	let navMenu = '';

	NAV_SECTIONS.forEach(section => { //creates the dynamic navbar li
		const SECTION_NUMBER = section.id;
		const SECTION_ATTRIBUTE = section.dataset.nav;
		navMenu += `<li> <a class="dynamic_menu" href="#${SECTION_NUMBER}">${SECTION_ATTRIBUTE}</a></li>`;
	});
	NAV_BAR.innerHTML = navMenu;
};
nav_menu_items();

const NAV_LINKS = document.querySelectorAll(".dynamic_menu"); // creates const for indiviual links inside dynamic navbar
NAV_LINKS.forEach(NAV_LINK => NAV_LINK.addEventListener("click", function(e) {
	e.preventDefault();
	const JUMP = e.currentTarget.getAttribute("href");
	window.scrollTo({ //smooths USERS link selection
		top: document.querySelector(JUMP).offsetTop,
		behavior: "smooth"
	});
}));

const OBSERVER = new IntersectionObserver(entries => { //clicking on nav menu items sets active class
	entries.forEach(entry => {
		entry.target.classList.toggle("active", entry.isIntersecting);
	});
}, {
	threshold: 0.75 //toggles active class if 75% of element is visible on screen
});

NAV_SECTIONS.forEach(NAV_SECTIONS => { //loops through section data for changes in intersection
	OBSERVER.observe(NAV_SECTIONS);
});