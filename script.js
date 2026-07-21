document.addEventListener("DOMContentLoaded", () => {

const button = document.getElementById("openBtn");

const content = document.getElementById("content");

button.addEventListener("click", () => {

content.classList.remove("hidden");

button.style.display = "none";

window.scrollTo({

top:content.offsetTop,

behavior:"smooth"

});

});

});
