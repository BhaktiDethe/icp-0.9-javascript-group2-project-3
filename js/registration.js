const rowname=[]
const rownumber=[]

 function addname(){
    const addcontainer = document.getElementById("nameflexbox")
    addcontainer.innerHTML=""
    for(i=0;i<rowname.length;i++){
    addcontainer.innerHTML += `<div class="add-name"> ${i+1+")"} ${rowname[i]} <br><br> </div>`
    }
}
addname();

function addnumber(){
  const addcontainer = document.getElementById("nameflexbox")
  addcontainer.innerHTML=""
  for(i=0;i<rownumber.length;i++){
  addcontainer.innerHTML += `<div class="add-number"> ${i+1+")"} ${rownumber[i]} </div>`
  }
}
addnumber();


  function addrow(){
    const name = document.getElementById("name");
    rowname.push(name.value)
    name.value="";
    addname();
  }
 
  function addrownumber(){
    const number = document.getElementById("number");
    rownumber.push(number.value)
    number.value="";
    addnumber();
  }