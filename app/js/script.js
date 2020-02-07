'use strict';
/*jslint browser: true*/
/*jshint globalstrict: true*/
/*global $, jQuery, alert*/
/*jslint node: true */
/* jshint node: true */

var $ =  jQuery,

$(document).ready(() => {
    // CHECK BROWSER FOR AUDIO + MOVE ROTATING IMAGE
    var isSafari = window.safari !== undefined,
        SAFARI = document.getElementById("safariAudio"),
        OTHER_BROWSER = document.getElementById("mep_0"),
        divImg = document.getElementById('rotate-img');

    if(location.pathname == "/josefin/"){
        if (isSafari) {
            SAFARI ? SAFARI.style.display="block" : null
            OTHER_BROWSER ? OTHER_BROWSER.style.display="none" : null
            divImg.style.zIndex = 0
        } else {
            SAFARI ? SAFARI.style.display="none" : null
            OTHER_BROWSER ? OTHER_BROWSER.style.display="block" : null
        }
    }
});

// MODAL IMAGE
var modal = document.getElementById('Modal')
var modalClose = document.getElementsByClassName("Modal__Close")[0]

modalClose.onclick = () => {
    modal.style.display = "none"
}

$('.post').on("click", function(){
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
    var img = document.getElementById("projects-img");
    var emailMe = document.getElementById("emailMe");

    var color = ["#a29bfe", "#00cec9", "#6c5ce7", "#74b9ff"];
    var textColor = ["#e3c3ff", "#f9f3fc", "#c5cfff", "#FFE1F0"];

    if(img){
        img.style.backgroundColor = color[i];
        emailMe.style.color = textColor[b];
        i = (i + 1) % color.length;
        b = (b + 1) % textColor.length;
    }
}
setInterval(change, 1000);
