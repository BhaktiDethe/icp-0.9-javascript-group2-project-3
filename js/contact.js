function openModel(){
    const overlayElement = document.getElementById('overlay');
    overlayElement.style.display= 'flex';
}

function closeModel(){
    const overlayElement = document.getElementById('overlay');
    overlayElement.style.display= 'none';
}
const greetinText = document.getElementById('greetinText');
const userName = localStorage.getItem('userName');
const userInput = document.getElementById('userName');

if(userName){
    greetinText.innerText = `Hello ${userName}.....🖐`;
}

function greetUser(){
    const userName = userInput.value;
    localStorage.setItem('userName',userName);

}
