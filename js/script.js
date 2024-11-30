const destinationEle = document.getElementById("destination-click");
const planTripEle = document.getElementById("trip-click")                                                                                                                                           
const navbarEle = document.getElementById("navbar")
const navlistEle = document.getElementById("nav-list")
const menuEle = document.getElementById("menu")

function displayOption() {
    destinationEle.style.visibility = "visible";
    navbarEle.style.borderBottomLeftRadius = "0px";
    navbarEle.style.borderBottomRightRadius = "0px";
}

function closeDesblock(){
    destinationEle.style.visibility = "hidden";
    navbarEle.style.borderBottomLeftRadius = "20px";
    navbarEle.style.borderBottomRightRadius = "20px";
}

function displayPlanTrip(){
    planTripEle.style.visibility = "visible";
    navbarEle.style.borderBottomLeftRadius = "0px";
    navbarEle.style.borderBottomRightRadius = "0px";
}

function closetripplan(){
    planTripEle.style.visibility = "hidden";
    navbarEle.style.borderBottomLeftRadius = "20px";
    navbarEle.style.borderBottomRightRadius = "20px";
}

function openSidebar(){
    navlistEle.style.visibility = "visible"
    menuEle.style.visibility = "hidden"
}

function closeSidebar(){
    navlistEle.style.visibility = "hidden"
    menuEle.style.visibility = "visible"
}

let images = [
    "images/index_page/bg1.jpg",
    "images/index_page/bg2.jpg",
    "images/index_page/bg3.jpg",
    "images/index_page/bg4.jpg"
];

let currentIndex = 0;
let mainElement = document.querySelector('.main');
let interval;

function changeBackgroundImage(index) {
    mainElement.style.backgroundImage = `url(${images[index]})`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; 
    changeBackgroundImage(currentIndex);
    resetAutoSlide(); 
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    changeBackgroundImage(currentIndex);
    resetAutoSlide(); 
}

function startAutoSlide() {
    interval = setInterval(nextImage, 3000); 
}

function resetAutoSlide() {
    clearInterval(interval); 
    startAutoSlide(); 
}

document.getElementById('next').addEventListener('click', nextImage);
document.getElementById('prev').addEventListener('click', prevImage);

changeBackgroundImage(currentIndex);
startAutoSlide();

const purposeContent = [
    {
        image: "./images/index_page/purpose1.webp",
        title: "How ConservationVIP is Preserving Torres Del Paine",
        description: "ConservationVIP connects volunteers with local efforts worldwide, including Torres Del Paine, to preserve natural and social treasures through hands-on work."
    },
    {
        image: "./images/index_page/purpose2.jpg",
        title: "How Mountain Lodges of Peru is Helping Children",
        description: "Discover how Mountain Lodges of Peru and Trekking for Kids are building a ceramics workshop to empower local children with trade skills and preserve traditional crafts in Huacahuasi."
    },
    {
        image: "./images/index_page/purpose3.webp",
        title: "How to Protect Indigenous Culture in Panama",
        description: "Explore authentic community tourism with Vapues Travel, where you can immerse yourself in the rich cultures of indigenous tribes and rural villages, creating unforgettable memories."
    },
    {
        image: "./images/index_page/purpose4.webp",
        title: "How Slow Travel Can Build Global Communities",
        description: "Experience tourism like never before with slow travel, which fosters deep connections with local communities and nature while supporting sustainable practices."
    },
    {
        image: "./images/index_page/purpose5.webp",
        title: "How One Bike Shop is Transforming Tanzania",
        description: "Discover One Bike Shop, Tanzania’s top spot for bike lovers, offering premium cycling services and exceptional coffee. See how they're empowering the community and promoting sustainable tourism through innovative initiatives."
    },
    {
        image: "./images/index_page/purpose6.webp",
        title: "How Local Initiatives Give Back to Host Communities",
        description: "Discover Volcanoes Safaris' latest initiatives: a tree nursery to restore local ecosystems and a vibrant Women's Day celebration promoting health and empowerment in Uganda."
    },
    {
        image: "./images/index_page/purpose7.jpg",
        title: "How Zegrahm Expeditions Trips Protect Gorillas",
        description: "Join Zegrahm Expeditions to not only explore new destinations but also support local communities and wildlife conservation, like their recent donation to the Sepilok Orangutan Rehabilitation Center."
    },
    {
        image: "./images/index_page/purpose8.jpg",
        title: "How ConservationVIP is Supporting the Yosemite Valley",
        description: "With 100 trips and 50,000 volunteer hours, ConservationVIP enhances stunning landscapes and cultural sites worldwide. Join their legacy of volunteerism with a special Yosemite trip offer."
    }
];

function generatePurposeCards() {
    const container = document.getElementById('purpose-container');

    purposeContent.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('purpose-card');

        card.innerHTML = `
            <img src="${item.image}" alt="">
            <h2>${item.title}</h2>
            <p>${item.description}</p>
        `;

        container.appendChild(card);
    });
}

window.onload = generatePurposeCards;


const toggle_btn = document.querySelector('#checkbox')

toggle_btn.addEventListener('change', () => {
    if(toggle_btn.checked){
        document.body.classList.add('dark-mode')
    }
    else{
        document.body.classList.remove('dark-mode')
    }
})
