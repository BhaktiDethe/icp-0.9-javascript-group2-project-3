function buttonShow(){
    const missionInfo = document.getElementById('missionInfo');
    const button= document.getElementById('button');
    if(missionInfo.classList.contains('hidden'))
    {
    missionInfo.classList.remove('hidden');
    button.textContent ='Mission';
    }
    else
    {
    missionInfo.classList.add('hidden');
    button.textContent ='Show Mission';
    }
}
function closeMission() {
   const missionInfo = document.getElementById('missionInfo');
   missionInfo.classList.add('hidden');
}
function closeTeam() {
   const teamInfo = document.getElementById('teamInfo');
   teamInfo.classList.add('hidden');
}
function closehistory() {
   const historyInfo = document.getElementById('historyInfo');
   historyInfo.classList.add('hidden');
}
 
function teamShow(){
 const teamInfo = document.getElementById('teamInfo');
 const teamBtn = document.getElementById('teamBtn');
 if( teamInfo.classList.contains('hidden'))
 {
    teamInfo.classList.remove('hidden');
    teamBtn.textContent = 'Team';
 }
 else{
    teamInfo.classList.add('hidden');
    teamBtn.textContent = 'show Team';
 }

 }
 function showHistory(){
 const historyInfo = document.getElementById('historyInfo');
 const historyBtn = document.getElementById('historyBtn');
 if( historyInfo.classList.contains('hidden'))
   {
      historyInfo.classList.remove('hidden');
      historyBtn.textContent = 'history';
   }
   else{
      historyInfo.classList.add('hidden');
      historyBtn.textContent = 'show history';
   }
 
 }

 document.getElementById('booking-form').addEventListener('submit', function(event) {
   event.preventDefault(); 

   
   const firstName = document.getElementById('first-name').value;
   const lastName = document.getElementById('last-name').value;
   
   const confirmationMessage = `
       <p>Thank you, ${firstName} ${lastName}!</p> `;
   
   const confirmationDiv = document.getElementById('confirmation-message');
   confirmationDiv.innerHTML = confirmationMessage;
   confirmationDiv.classList.remove('hidden-message');
});

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