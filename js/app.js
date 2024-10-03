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

// load video api ----------------->
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then((res) => res.json())
        .then((data) => displayVideos(data))
        .catch((err) => console.log(err))
};

// display the videos ----------------->
const displayVideos = (data) => {
    const {videos} = data;
    const vdContainer = document.querySelector('.vd-container');

    videos.forEach((videoData) => {
        const {title, thumbnail, authors, others} = videoData;
        const {profile_picture, profile_name, verified} = authors[0];
        const {views, posted_date} = others;

        const publishedDate = (posted_date) => {
            let totalSecond = posted_date;
            let getHours = Math.floor(totalSecond / 3600);
            let remainHours = getHours % 3600;
            let getMinutes = Math.floor(remainHours / 60);
            let getSeconds = remainHours % 60;
            
            return `${getHours}h ${getMinutes}m ${getSeconds}s`;
        };

        const vdCard = document.createElement('div');

        vdCard.classList.add('vd-card');
        vdCard.innerHTML = `
            <div class="thumbnail">
                <img src=${thumbnail} alt="">
            </div>
            <div class="vd-details">
                <div class="vd-logo">
                    <img src=${profile_picture} alt="">
                </div>
                <div class="vd-title-bx">
                    <p class="vd-title">${title}.</p>
                    <div class="vd-channel-details">
                        <div class="vd-channel">
                            <p class="channel-name">${profile_name}</p>
                            <div class="verify-icon">
                                <img src="./assets/verify.png" alt="">
                            </div>
                        </div>
                        <div class="vd-views">
                            <p class="views-title">${views}</p>
                            <div class="dotted-divider"></div>
                            <p class="views-title">${publishedDate(posted_date)}</p>
                        </div>
                    </div>
                </div>
            </div>
        `

        vdContainer.appendChild(vdCard);
    });
};











// displayVideos()
loadVideos()