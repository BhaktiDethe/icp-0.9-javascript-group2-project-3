function openModel(){
    const overlayElement = document.getElementById('overlay');
    overlayElement.style.display= 'flex';
}

function closeModel(){
    const overlayElement = document.getElementById('overlay');
    overlayElement.style.display= 'none';
}

const greetinText = document.getElementById("greetinText");
const userInput = document.getElementById("firstName"); 

const storedUserName = localStorage.getItem("firstName");
if (storedUserName) {
    greetinText.innerText = `Hello ${storedUserName}.....🖐`;
}
function greetUser() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    const company = document.getElementById("company").value;

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("email", email);
    localStorage.setItem("company", company);

    greetinText.innerText = `Hello ${firstName}.....🖐`;

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("email").value = "";
    document.getElementById("company").value = "";
}