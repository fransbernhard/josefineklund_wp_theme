'use strict';
/*jslint browser: true*/
/*jshint globalstrict: true*/
/*global $, jQuery, alert*/
/*jslint node: true */
/* jshint node: true */

var $ =  jQuery,
    user_id = '1466267444',
    access_token = '1466267444.0b0408c.d1570f80a5e34925a3ad2d4201a1235d',
    istagramContainer = document.getElementById("insta");

$(document).ready(() => {
    const myObject = {
        method: "GET",
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': 'application/json'
        }
    };

    fetch('https://api.instagram.com/v1/users/' + user_id + '/media/recent/?access_token=' + access_token, myObject)
        .then(res => res.json())
        .then(data => {
            for (var item in data.data) {
                $('#insta').append('<li><a target="_blank" href="'+data.data[item].link+'" class="insta-post" style="background-image: url('+data.data[item].images.low_resolution.url+'"></a></li>')
            }
        }).catch(function(err) {
            console.log('Error fetching products: ' + err.message);
        });

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
function openModal(URL, TITLE, CONTENT){
    var modal = document.getElementById('Modal')
    var modalImg = document.getElementById("Modal__Image")
    var modalTitle = document.getElementById("Modal__Title")
    var modalText = document.getElementById("Modal__Text")
    var modalLink = document.getElementById("Modal__Link")
    var modalClose = document.getElementsByClassName("Modal__Close")[0]

    modal.style.display = "flex"
    modalTitle.innerHTML = TITLE
    modalImg.src = URL
    modalText.innerHTML = CONTENT

    var trimTitle = encodeURIComponent(TITLE.trim())
    modalLink.href = "mailto:josefineklundmail@gmail.com?Subject=" + trimTitle
    modalLink.innerHTML = "Contact me"

    modalClose.onclick = () => {
        modal.style.display = "none"
    }
}

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
