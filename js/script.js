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

