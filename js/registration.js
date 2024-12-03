const rowname=[]

 function addname(){
    const addcontainer = document.getElementById("nameflexbox")
    addcontainer.innerHTML=""
    for(i=0;i<rowname.length;i++){
    addcontainer.innerHTML += `<div class="add-name "> ${i+1+")"} ${rowname[i]} <br><br> </div>`
    }
}
addname();

  function addrow(){
    const name = document.getElementById("name");
    rowname.push(name.value)
    name.value="";
    addname();
  }

const images=["./../images/registrationpage/img-1.jpg","./../images/registrationpage/img-2.jpg","./../images/registrationpage/img-3.jpg","./../images/registrationpage/img-4.jpg"]
let index= 0;
const slide= document.getElementById("slide");

function next(){
  if(index<images.length-1){
    index++;
  }
  else{
    index=0;
  }
  slide.src=images[index];
}

function prev(){
  if(index>0){
    index--;
  }
  else{
    index=images.length-1;
  }
  slide.src=images[index];
}
setInterval(next,2000);

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