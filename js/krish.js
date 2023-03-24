const text = document.querySelector('h2');

window.addEventListener('scroll', () => {
    const current = scrollY;
    text.style.fontSize = `clamp(3rem, ${current}px, 30rem)`;
});


var cursor = document.getElementById('cursor');
cursor.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});




// const banner = document.querySelector(".container");

// window.addEventListener('scroll', function(){
//     const value = 1100 - window.scrollY;
//     banner.style.clipPath = "circle("+ value +"px at center center)";
// })