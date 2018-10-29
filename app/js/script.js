var $ =  jQuery,

    num_photos = 30;

window.onload = function init(){
    $.ajax({
        url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
        dataType: 'jsonp',
        type: 'GET',
        data: {
            access_token: token,
            count: num_photos
        },
        success: function(data){
            for( var x in data.data ){
                $('#insta').append('<li><a target="_blank" href="'+data.data[x].link+'" class="insta-post" style="background-image: url('+data.data[x].images.low_resolution.url+'"></a></li>')
            }
        },
        error: function(err){
            console.log(err)
        }
    })

    // CHECK BROWSER FOR AUDIO + MOVE ROTATING IMAGE
    var isSafari = window.safari !== undefined
    var SAFARI = document.getElementById("safariAudio")
    var OTHER_BROWSER = document.getElementById("mep_0")
    var divImg = document.getElementById('rotate-img');

    if(location.pathname == "/josefin/"){
        if (isSafari) {
            SAFARI.style.display="block"
            OTHER_BROWSER.style.display="none"
            divImg.style.zIndex = 0
        } else {
            SAFARI.style.display="none"
            OTHER_BROWSER.style.display="block"

            // // MOVE ROTATING ELEMENT
            // moveElementNotSafari(divImg)
        }
    } else {
        console.log("You are not at root");
    }
}

// MODAL IMAGE
const openModal = (URL, TITLE, ID, CAPTION) => {
    var modal = document.getElementById('myModal')
    var modalImg = document.getElementById("modal-img")
    var caption = document.getElementById("caption")
    var captionH3 = caption.getElementsByTagName('h3')[0]
    var captionA = caption.getElementsByTagName('a')[0]
    var captionB = caption.getElementsByTagName('p')[0]
    var span = document.getElementsByClassName("close")[0]

    // Email title
    var newTitle = encodeURIComponent(TITLE.trim())
    modal.style.display = "flex"
    captionH3.innerHTML = TITLE
    modalImg.src = URL
    captionB.innerHTML = CAPTION

    captionA.href = "mailto:josefineklundmail@gmail.com?Subject=" + newTitle
    captionA.innerHTML = "Contact me"

    span.onclick = function() {
        modal.style.display = "none"
    }
}

// RESPONSIVE MENU
var menuPrimary = document.getElementById("menu-primary-id")
var menuIcon = document.getElementById("menu-icon")

document.addEventListener('click', function (e) {
    if ( e.target.classList.contains('bar') ) {
        if (menuPrimary.classList.contains("activeMenu")) {
            menuPrimary.classList.remove("activeMenu")
        } else {
            menuPrimary.classList.add("activeMenu")
        }

        if (menuIcon.classList.contains("open")) {
            menuIcon.classList.remove("open")
        } else {
            menuIcon.classList.add("open")
        }
    }
}, false)

// CLOSE MENU ON CLICK ANYWHERE
window.onclick = function(e) {
    if (!e.target.classList.contains('bar')) {
        if (menuPrimary.classList.contains('activeMenu')) {
            menuPrimary.classList.remove('activeMenu')
            menuIcon.classList.remove("open")
        } else {
            console.log("PRIMARY MENU NOT CONTAIN ACTIVE CLASS")
        }
    } else {
        console.log("TARGET CONTAIN CLASS 'BAR'")
    }
}

// MOVE ROTATING IMAGE
// function moveElementNotSafari(element){
//     element.onmousedown = function(event) { // (1) start the process
//
//         // (2) prepare to moving: make absolute and on top by z-index
//         element.style.position = 'absolute';
//         element.style.zIndex = 1000;
//         // move it out of any current parents directly into body
//         // to make it positioned relative to the body
//         document.body.append(element);
//         // ...and put that absolutely positioned element under the cursor
//
//         moveAt(event.pageX, event.pageY);
//
//         // centers the element at (pageX, pageY) coordinates
//         function moveAt(pageX, pageY) {
//             element.style.left = pageX - element.offsetWidth / 2 + 'px';
//             element.style.top = pageY - element.offsetHeight / 2 + 'px';
//         }
//
//         function onMouseMove(event) {
//             moveAt(event.pageX, event.pageY);
//         }
//
//         // (3) move the element on mousemove
//         document.addEventListener('mousemove', onMouseMove);
//
//         // (4) drop the element, remove unneeded handlers
//         element.onmouseup = function() {
//             document.removeEventListener('mousemove', onMouseMove);
//             element.onmouseup = null;
//         };
//
//         element.ondragstart = function() {
//             return false;
//         };
//
//     };
// }

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
