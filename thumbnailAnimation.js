
let image = image.getElementById("appleMain");

let originalWidth = image.width;

let increaseWidth = originalWidth;

function enlargeImage (){
    increaseWidth++;
    image.style.width = increaseWidth + 'px';
    
    if (increaseWidth==150) {
        clearInterval(timer);
        increaseWidth = originalWidth; 
    }
}

image.addEventListener('click',()=>{
    timer = setInterval(enlargeImage,100);
});


