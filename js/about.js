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
   