const activities = [
    { title: "Canoeing", imgSrc: "./../images/adventure_activities/card1-img-canoeing.webp", altText: "card1-img-canoeing" },
    { title: "Canyoneering", imgSrc: "./../images/adventure_activities/card2-img-canyoneering.jpg", altText: "canyoneering" },
    { title: "Diving", imgSrc: "./../images/adventure_activities/card3-img-diving.webp", altText: "diving" },
    { title: "Kayaking", imgSrc: "./../images/adventure_activities/card4-img-kayaking.webp", altText: "kayaking" },
    { title: "Dog sledding", imgSrc: "./../images/adventure_activities/card5-img-dog-sledding.jpg", altText: "dog-sledding" },
    { title: "Mountain biking", imgSrc: "./../images/adventure_activities/card6-img-mountain-biking.jpg", altText: "mountain-biking" },
    { title: "Mountaineering", imgSrc: "./../images/adventure_activities/card7-img-mountaineering.jpg", altText: "mountaineering" },
    { title: "Paddle boarding", imgSrc: "./../images/adventure_activities/card8-img-paddle-boarding.jpg", altText: "paddle-boarding" },
    { title: "Rock climbing", imgSrc: "./../images/adventure_activities/card9-img-rock-climbing.jpg", altText: "rock-climbing" },
    { title: "Skiing", imgSrc: "./../images/adventure_activities/card10-img-skiing-.jpg", altText: "skiing" },
    { title: "Snow mobliling", imgSrc: "./../images/adventure_activities/card11-img-snow-mobliling.jpg", altText: "snow-mobliling" },
    { title: "Surfing", imgSrc: "./../images/adventure_activities/card12-img-surfing.jpg", altText: "surfing" },
    { title: "Trekking", imgSrc: "./../images/adventure_activities/card13-img-trekking.jpg", altText: "trekking" },
    { title: "Via ferrata", imgSrc: "./../images/adventure_activities/card14-img-via-ferrata.jpg", altText: "via-ferrata" },
    { title: "Safari", imgSrc: "./../images/adventure_activities/card15-img-safari.webp", altText: "safari" },
    { title: "White water rafting", imgSrc: "./../images/adventure_activities/card16-img-white-water-rafting.webp", altText: "white-water-rafting" },
];

const purposeContainer = document.createElement("div");
purposeContainer.classList.add("card-container");

activities.forEach(activity => {
    const card = document.createElement("div");
    card.classList.add("card-card");

    const img = document.createElement("img");
    img.src = activity.imgSrc;
    img.alt = activity.altText;

    const title = document.createElement("h2");
    title.textContent = activity.title;

    card.appendChild(img);
    card.appendChild(title);
    purposeContainer.appendChild(card);
});

document.body.appendChild(purposeContainer); // Append to the body or any desired parent container

const toggle_btn = document.querySelector('#checkbox')

toggle_btn.addEventListener('change', () => {
    if(toggle_btn.checked){
        document.body.classList.add('dark-mode')
    }
    else{
        document.body.classList.remove('dark-mode')
    }
})

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        navbarEle = document.querySelector('.header');
 
    if (toggle && nav && navbarEle) {
        toggle.addEventListener('click', () => {
            const isMenuVisible = nav.classList.toggle('show-menu');
            toggle.classList.toggle('show-icon');
 
            if (isMenuVisible) {
                navbarEle.style.borderBottomLeftRadius = "0px";
                navbarEle.style.borderBottomRightRadius = "0px";
            } else {
                navbarEle.style.borderBottomLeftRadius = "20px";
                navbarEle.style.borderBottomRightRadius = "20px";
            }
        });
    } else {
        console.error("Toggle button, navigation menu, or navbar element not found!");
    }
 };
 
 showMenu('nav_toggle', 'nav_menu');