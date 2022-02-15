//BACK TO TOP BUTTON 

let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


//THUMBNAIL ANIMATION

let appleImage = document.getElementById("appleMain");

let originalWidth = appleImage.width;

let increaseWidth = originalWidth;

appleImage.addEventListener('hover',()=>{
    timer = setInterval(enlargeImage,6);
});

function enlargeImage (){
    increaseWidth = increaseWidth + 50;
    appleImage.style.width = increaseWidth + 'px';
    
    
    if (increaseWidth==150) {
        clearInterval(timer);
        increaseWidth = originalWidth; 
    }
}

function normalImage (){
    appleImage.style.width = originalWidth;
}

//PREFERENCES

let fontInc = document.getElementById('fontInc');

let fontDec = document.getElementById('fontDec');

function increaseFont() {
    fontInc.setAttribute('id','incre');
}

fontInc.addEventListener('click',increaseFont);

function decreaseFont() {
    fontDec.setAttribute('id','decre');
}

fontDec.addEventListener('click',decreaseFont);

