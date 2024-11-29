const rowname=[]

 function addname(){
    const addcontainer = document.getElementById("nameflexbox")
    addcontainer.innerHTML=""
    for(i=0;i<rowname.length;i++){
    addcontainer.innerHTML += `<div class="add-name"> ${i+1+")"} ${rowname[i]} <br><br> </div>`
    }
}
addname();

  function addrow(){
    const name = document.getElementById("name");
    rowname.push(name.value)
    name.value="";
    addname();
  }
