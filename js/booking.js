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