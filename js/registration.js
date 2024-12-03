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
//--------------------------local storage-------------------------------//
function storeData() {
  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;

  if (!name || !email || !phone || !password) {
      alert('Please fill in all fields.');
      return;
  }

  const userData = {
      name: name,
      email: email,
      phone: phone,
      password: password, 
  };

  localStorage.setItem('user', JSON.stringify(userData));

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('password').value = '';

  alert('Registration successful!');
  window.location.href = './login.html';
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