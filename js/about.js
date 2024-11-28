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

 