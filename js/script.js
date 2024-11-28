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
