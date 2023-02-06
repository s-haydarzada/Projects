const btnLeft = document.getElementById("btn_left");
const btnRight = document.getElementById("btn_right");
const slider = document.querySelector(".slider");
const title = document.querySelector(".title");


let index = 0;
const images = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];
const heading = ["Slide1","Slide2","Slide3","Slide4","Slide5"];

function slide(index){

    slider.style.backgroundImage = `url(./image/${images[index]})`;
    title.innerText = heading[index];
}


btnLeft.addEventListener("click",()=>{
    index--;
    if(index< 0){
        index = images.length-1;
    }


    slide(index);
});

btnRight.addEventListener("click",()=>{
    index++;

    if(index > images.length-1){
        index=0;
    }
    slide(index);
})






