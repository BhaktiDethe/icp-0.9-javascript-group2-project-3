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