// Auto update year 
const yearUpdate = document.querySelectorAll(".update-year");
yearUpdate.forEach((element) => {
    element.innerHTML = new Date().getFullYear();
});

// right click disable 
document.oncontextmenu = (element) => {
    element.preventDefault();
}

// view all brands load button 
const loadButton = document.querySelector(".load-more");
let currentItem = 3;
loadButton.onclick = () => {
    setTimeout(() => {
        let boxes = [...document.querySelectorAll(".brand-list")];
        for (let i = currentItem; i < currentItem + 3; i++) {
            boxes[i].classList.add("active");
        }
        currentItem += 3;
        if (currentItem >= boxes.length) {
            loadButton.classList.add("hide");

        }
    }, 1000);
}

// view all brands image
const errorImages = document.querySelectorAll(".error-img");
errorImages.forEach((image) => {
    image.onerror = () => {
        const defaultImage = "../images/No-Image.png";
        image.src = defaultImage;
        image.alt = "default";
    }
})

// navigation bar on scroll effect and scroll progress bar
const container = document.querySelector("body");
const highlight = document.getElementById("bar-highlight");
const headerNav = document.querySelector(".header-nav");

// windows scroll function 
window.onscroll = () => {
    // scroll progress bar
    let cheight = container.offsetHeight - window.innerHeight;
    let cpos = container.getBoundingClientRect();
    let diff = cheight + cpos.top;
    let progress = diff / cheight * 100;
    let csswidth = Math.floor(100 - progress);
    highlight.style.width = csswidth + "%";
    //back to top button
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    // navbar sticky 
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerNav.style.position = "fixed";
        headerNav.style.top = "0";
        headerNav.style.width = "100%";
        headerNav.style.zIndex = "10000";
    }else{
        headerNav.style.position = "relative"
    } 
}

//back to top button
const mybutton = document.querySelector(".myBtn");
mybutton.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
