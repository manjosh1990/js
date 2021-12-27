const hamburgerBtn = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

hamburgerBtn.addEventListener("click",toggleButton);

function toggleButton(){
    navList.classList.toggle('show');
}