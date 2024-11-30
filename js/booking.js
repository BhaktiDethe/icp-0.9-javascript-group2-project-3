// GUEST DROPDOWN FUNCTIONALITY
let guests = {
    adults: 1,
    children: 1,
    rooms: 1,
};

function updateGuestCount(type, change) {
    if (guests[type] + change >= 0) {
        guests[type] += change;
        document.getElementById(type + "-count").innerText = guests[type];
        updateGuestSummary();
    }
}

function updateGuestSummary() {
    const guestSummary = `${guests.adults} adult${guests.adults > 1 ? "s" : ""} · ${
        guests.children
    } child${guests.children > 1 ? "ren" : ""} · ${guests.rooms} room${
        guests.rooms > 1 ? "s" : ""
    }`;
    document.getElementById("guest-dropdown-btn").innerText = guestSummary;
}

function toggleGuestDropdown() {
    const dropdown = document.getElementById("guest-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function closeGuestDropdown() {
    document.getElementById("guest-dropdown").style.display = "none";
}

document
    .getElementById("guest-dropdown-btn")
    .addEventListener("click", toggleGuestDropdown);


document.addEventListener('DOMContentLoaded', function () {

    const packages = [
        {
            image: "../images/booking/agra.jpg",
            packageName: "Explore the Wonders of Agra",
            city: "AGRA",
            rate: "₹6,999",
            originalRate: "₹10,500",
            description: "per person",
            days: 1,
            nights: 2
        },
        {
            image: "../images/booking/chennai.jpg",
            packageName: "Chennai Highlights Points",
            city: "CHENNAI",
            rate: "₹7,499",
            originalRate: "₹12,000",
            description: "per person",
            days: 1,
            nights: 2
        },
        {
            image: "../images/booking/goa.jpg",
            packageName: "Goa Beach Bliss",
            city: "GOA",
            rate: "₹9,999",
            originalRate: "₹15,500",
            description: "per person",
            days: 2,
            nights: 3
        },
        {
            image: "../images/booking/kerla.jpg",
            packageName: "Kerala Backwaters Escape",
            city: "KERALA",
            rate: "₹8,499",
            originalRate: "₹14,000",
            description: "per person",
            days: 2,
            nights: 3
        },
        {
            image: "../images/booking/kolkata.webp",
            packageName: "Kolkata City Wonders",
            city: "KOLKATA",
            rate: "₹7,999",
            originalRate: "₹12,500",
            description: "per person",
            days: 1,
            nights: 2
        },
        {
            image: "../images/booking/mathura.jpg",
            packageName: "Mathura Pilgrimage Tour",
            city: "MATHURA",
            rate: "₹6,499",
            originalRate: "₹10,000",
            description: "per person",
            days: 1,
            nights: 2
        },
        {
            image: "../images/booking/mumbai.jpg",
            packageName: "Mumbai City Exploration",
            city: "MUMBAI",
            rate: "₹8,999",
            originalRate: "₹14,200",
            description: "per person",
            days: 2,
            nights: 3
        },
        {
            image: "../images/booking/shimla.avif",
            packageName: "Shimla Hill Retreat",
            city: "SHIMLA",
            rate: "₹7,499",
            originalRate: "₹11,500",
            description: "per person",
            days: 2,
            nights: 3
        }
    ];