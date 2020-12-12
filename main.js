const hamburger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');


hamburger_icon.addEventListener('click', () => {
    nav_list.classList.toggle('open');
    hamburger_icon.classList.toggle('active');
});

const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["one of the most profitable land-use in the tropics", "the most consumed vegetable in the world", "consumed to a total of 62million tons annually", "one of the Agricultural products with the highest demand in the global market especially in Nigeria"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;

let textArrayIndex = 0;
let charIndex = 0;

function type(){
    if(charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent +=textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else{
         setTimeout(erase, newTextDelay);
        
    }
}

function erase() {
    if(charIndex > 0){
         typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else{
      textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}
document.addEventListener("DOMContentLoaded", function(){
    setTimeout(type, newTextDelay + 250);
});
