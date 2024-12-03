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
//--------------------------slideshow-------------------------------//
const simages=["./../images/registrationpage/img-3.jpg",
    "./../images/registrationpage/img-4.jpg",
    "./../images/registrationpage/img-5.jpg",
    "./../images/registrationpage/img-6.jpg",
    "./../images/registrationpage/img-7.jpg"];
let index= 0;
const Slide=document.getElementById('reg-slide');

function regnext(){
if(index < simages.length-1){
  index++;
}
else{
  index=0;
}
Slide.src=simages[index];
}

function regprev(){
  if(index>0){
      index--;
  }
  else{
      index=simages.length-1;
  }
Slide.src=simages[index];
}
setInterval(regnext,5000)