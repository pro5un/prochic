const text = document.querySelector('h2');

window.addEventListener('scroll', () => {
    const current = scrollY;
    text.style.fontSize = `clamp(3rem, ${current}px, 30rem)`;
})



const banner = document.querySelector(".container");

window.addEventListener('scroll', function(){
    const value = 1400 - window.scrollY;
    banner.style.clipPath = "circle("+ value +"px at center center)";
})