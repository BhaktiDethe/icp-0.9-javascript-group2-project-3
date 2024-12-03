function openModel(){
    const overlayElement = document.getElementById('overlay');
    overlayElement.style.display= 'flex';
}

function closeModel(){
    const overlayElement = document.getElementById('overlay');
    overlayElement.style.display= 'none';
}

const greetinText = document.getElementById("greetinText");
const userInput = document.getElementById("firstName"); 

const storedUserName = localStorage.getItem("firstName");
if (storedUserName) {
    greetinText.innerText = `Hello ${storedUserName}.....🖐`;
}
function greetUser() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    const company = document.getElementById("company").value;

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("email", email);
    localStorage.setItem("company", company);

    greetinText.innerText = `Hello ${firstName}.....🖐`;

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("email").value = "";
    document.getElementById("company").value = "";
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