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

   
   const destination = document.getElementById('destination').value;
   const checkIn = document.getElementById('check-in').value;
   const checkOut = document.getElementById('check-out').value;
   const member = document.getElementById('member').value;

   
   const confirmationMessage = document.getElementById('confirmation-message');
   confirmationMessage.classList.remove('hidden-message');
   confirmationMessage.innerHTML = `Thank you for booking your trip to ${destination}!<br>Check-in: ${checkIn}<br>Check-out: ${checkOut}<br>Member: ${member}`;
   
   
   document.getElementById('booking-form').reset();
});