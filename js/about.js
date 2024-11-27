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
