const overlay = document.getElementById("overlay");
      function openSidebar(sidebarId) {
        const sidebars = document.querySelectorAll(".ask");
        sidebars.forEach((sidebar) => (sidebar.style.visibility = "hidden"));
        const sidebar = document.getElementById(sidebarId);
        sidebar.style.visibility = "visible";
        overlay.classList.add("show");
      }

      function closeSidebar() {
        const sidebars = document.querySelectorAll(".ask");
        sidebars.forEach((sidebar) => (sidebar.style.visibility = "hidden"));
        overlay.classList.remove("show");
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