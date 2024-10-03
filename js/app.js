// video load api ---------------->
// https://openapi.programming-hero.com/api/phero-tube/videos

// categories load api -------------->
// https://openapi.programming-hero.com/api/phero-tube/categories

// responsive header ------------------->
const navOpen = (open) => {
    const openNav = open;
    openNav.classList.toggle('right-[0%]');

    return;
};

const menuBarOpenBtn = document.querySelector('#menuBarOpenBtn');
menuBarOpenBtn.addEventListener('click', () => {
    const mobileNav = document.querySelector('#mobileNav');
    navOpen(mobileNav);
});

const menuBarCloseBtn = document.querySelector('#menuBarCloseBtn');
menuBarCloseBtn.addEventListener('click', () => {
    const mobileNav = document.querySelector('#mobileNav');
    navOpen(mobileNav);
});


// responsive nav link btn ----------------->
const navLinks = document.querySelectorAll('#navLinkBtn');
navLinks.forEach((navLink) => {
    const navLinkBtn = navLink;

    navLinkBtn.addEventListener('click', (navBtn) =>{;
        const navLinksBtn = navLink;

        navLinks.forEach((navButton) => {
            navButton.classList.remove('navActive');
        });

        navLinksBtn.classList.add('navActive');
    });
});

// responsive search box ------------------->
const searchOpen = (openSearch) => {
    const openSearchBar = openSearch;
    openSearchBar.classList.toggle('top-[0%]');

    return;
};

const searchBtn = document.querySelector('#searchBtn');
searchBtn.addEventListener('click', () => {
    const searchBar = document.querySelector('#searchBar');
    searchOpen(searchBar);
});

const closeSearchBtn = document.querySelector('#closeSearchBtn');
closeSearchBtn.addEventListener('click', () => {
    const searchBar = document.querySelector('#searchBar');
    searchOpen(searchBar);
});

// tab section ------------------->
const allTabBtn = document.querySelectorAll('#tabBtn');
allTabBtn.forEach((tabButtons) => {
    const tabButton = tabButtons;

    tabButton.addEventListener('click', () =>{
        const tabBtn = tabButtons;
        
        allTabBtn.forEach((btn) => {
            btn.classList.remove('active');
        });
        tabBtn.classList.add('active');
    });
});