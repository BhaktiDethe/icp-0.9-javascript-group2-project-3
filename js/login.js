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