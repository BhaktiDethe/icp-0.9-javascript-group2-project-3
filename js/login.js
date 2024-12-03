const greetinText = document.getElementById("greetinText");
const storedEmail = localStorage.getItem("email");

if (storedEmail) {
    greetinText.innerText = `Welcome back, ${storedEmail}!`;
}

function login() {
    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;

    const storedData = localStorage.getItem('user');
    if (!storedData) {
        alert('No user found. Please register first.');
        return;
    }

    const user = JSON.parse(storedData);

    if (loginEmail === user.email && loginPassword === user.password) {
        alert('Login successful!');
        window.location.href = '../index.html'; 
    } else {
        alert('Invalid email or password. Please try again.');
    }
}
