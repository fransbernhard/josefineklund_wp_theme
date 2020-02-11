'use strict';
var $ =  jQuery;

var modal = document.getElementById('Modal');
var modalClose = document.getElementsByClassName("Modal__Close")[0];

modalClose.onclick = () => {
    modal.style.display = "none"
}

$('.Post').on("click", function(){
    var title = this.getAttribute('data-title');
    var imageUrl = this.getAttribute('data-image');
    var content = this.getAttribute('data-content');

    openModal(title, imageUrl, content);
})

function openModal(TITLE, IMAGEURL, CONTENT){
    var modalLink = document.getElementById("Modal__Link")
    var modalImage = document.getElementById("Modal__Image")
    var modalContent = document.getElementById("Modal__Text")
    var modalTitle = document.getElementById("Modal__Title")

    modal.style.display = "flex"
    modalImage.src = IMAGEURL
    modalTitle.innerHTML = TITLE
    modalContent.innerHTML = CONTENT

    var trimTitle = encodeURIComponent(TITLE.trim())
    modalLink.href = "mailto:josefineklundmail@gmail.com?Subject=" + trimTitle
}

$(document).keyup(e => {
    if (e.keyCode === 27) modal.style.display = "none"
});

// RESPONSIVE MENU
var menuPrimary = document.getElementById("menu-primary-id")
var menuIcon = document.getElementById("menu-icon")

document.addEventListener('click', e => {
    e.target.classList.contains('bar') &&
        menuPrimary.classList.contains("activeMenu")
            ? menuPrimary.classList.remove("activeMenu")
            : menuPrimary.classList.add("activeMenu")

        menuIcon.classList.contains("open")
            ? menuIcon.classList.remove("open")
            : menuIcon.classList.add("open")
}, false)

// CLOSE MENU ON CLICK ANYWHERE
window.onclick = function(e) {
    if (!e.target.classList.contains('bar')) {
        if (menuPrimary.classList.contains('activeMenu')) {
            menuPrimary.classList.remove('activeMenu')
            menuIcon.classList.remove("open")
        }
    }
}

// CHANGE BACKGROUND ON PROJECT BTN
var i = 0;
var b = 0;

const change = () => {
    var button = document.getElementById("Project-Btn__Link");
    var contact = document.getElementById("Information__Contact");

    var color = ["#a29bfe", "#00cec9", "#6c5ce7", "#74b9ff"];
    var textColor = ["#e3c3ff", "#f9f3fc", "#c5cfff", "#FFE1F0"];

    if(button){
        button.style.backgroundColor = color[i];
        contact.style.color = textColor[b];
        i = (i + 1) % color.length;
        b = (b + 1) % textColor.length;
    }
}
setInterval(change, 1000);
