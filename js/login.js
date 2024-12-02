const greetinText = document.getElementById("greetinText");
const storedEmail = localStorage.getItem("email");

if (storedEmail) {
    greetinText.innerText = `Welcome back, ${storedEmail}!`;
}

function loginUser() {
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (!savedEmail || !savedPassword) {
        alert("No account found. Please register first.");
        return;
    }

    if (emailInput === savedEmail && passwordInput === savedPassword) {
        showDialog("Login successful! Welcome!");
    } else {
        showDialog("Invalid email or password. Please try again.");
    }
}
function showDialog(message) {
    const dialog = document.getElementById("dialog");
    const dialogMessage = document.getElementById("dialogMessage");

    dialogMessage.innerText = message;
    dialog.style.display = "block";
}

function closeDialog() {
    const dialog = document.getElementById("dialog");
    dialog.style.display = "none";
}