const images = ["./../images/adventure_activities/navbar-img-1.jpeg", "./../images/adventure_activities/navbar-img-2.jpeg",]

let index = 0;
const slideImg = document.getElementById('slide-img');

function next(){
    if(index < images.length -1)
{
    index++;
}
else{
    index = 0;
}
slideImg.src = images[index]

}

function previous(){
    if(index > 0){
        index--;
    }
    else{
        index = images.length-1;
    }
    slideImg.src = images[index]
}
setInterval(next, 6000);