const greetinText = document.getElementById('greetinText');
const userName = localStorage.getItem('userName');
const userInput = document.getElementById('userName');

if(userName){
    greetinText.innerText = `Hello ${userName}.....🖐`;
}

function greetUser(){
    const userName = userInput.value;
    localStorage.setItem('userName',userName);
    greetinText.innerText = `Hello ${userName}.....🖐`;
    userInput.value ='';
}
