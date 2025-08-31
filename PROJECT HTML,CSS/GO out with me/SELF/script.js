const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yes = document.querySelector('.yes');
const no = document.querySelector('.no');
const wrapperRect = wrapper.getBoundingClientRect();
const noRect = no.getBoundingClientRect();
var img = document.querySelector(".gif_container"); // Use querySelector to get the first element

console.log("Initial img.src:", img.src); // Log the initial src value

yes.addEventListener('click', () => {
    console.log("Clicked Yes button");

    if (img.src !== "https://i.postimg.cc/wTDG30TB/yes.gif") {
        img.src = "https://i.postimg.cc/wTDG30TB/yes.gif";
    } else {
        img.src = "https://i.postimg.cc/pdNqPxx1/milk-and-mocha-cute.gif";
    }

    console.log("Updated img.src:", img.src); // Log the updated src value

    // Add 'load' event listener to check if the image is loaded
    img.addEventListener('load', () => {
        console.log('Image loaded successfully');
    });

    question.innerHTML = 'I Love You Too :)';
});

no.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noRect.height)) + 1;
    no.style.left = i + 'px';
    no.style.top = j + 'px';
});
