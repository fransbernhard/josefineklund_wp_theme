var $ =  jQuery

num_photos = 30

window.onload = function init(){

  // GET INSTAGRAM POSTS
  if(location.pathname == "/jose2/"){
    console.log("YOU ARE AT ROOT");
    $.ajax({
     url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
     dataType: 'jsonp',
     type: 'GET',
     data: {access_token: token, count: num_photos},
     success: function(data){
       console.log(data)
       for( x in data.data ){
         $('#insta').append('<li class="insta-post" style="background-image: url('+data.data[x].images.low_resolution.url+'"></li>')
       }
     },
     error: function(err){
       console.log(err)
     }
    })

    // CHECK BROWSER FOR AUDIO
    var isSafari = window.safari !== undefined
    var SAFARI = document.getElementById("safariAudio")
    var OTHER_BROWSER = document.getElementById("mep_0")
    if (isSafari) {
      console.log("YES YOU ARE SAFARI")
      SAFARI.style.display="block"
      OTHER_BROWSER.style.display="none"
    } else {
      console.log("NOT SAFARI")
      SAFARI.style.display="none"
      OTHER_BROWSER.style.display="block"
    }
  } else {
    console.log("YOU ARE NOT AT ROOT");
  }
}

// MODAL IMAGE
function openModal(URL, TITLE, CONTENT){
  var modal = document.getElementById('myModal')

  var modalImg = document.getElementById("img")
  var caption = document.getElementById("caption")
  var captionH3 = caption.getElementsByTagName('h3')[0]
  var captionP = caption.getElementsByTagName('p')[0]
  var captionA = caption.getElementsByTagName('a')[0]

  modal.style.display = "flex"
  modalImg.src = URL
  captionH3.innerHTML = TITLE

  var newTitle = encodeURIComponent(TITLE.trim())
  captionA.href = "mailto:josefineklundmail@gmail.com?Subject=" + newTitle
  captionA.innerHTML = "Email me about this art"

  var span = document.getElementsByClassName("close")[0]
  span.onclick = function() {
    modal.style.display = "none"
  }
}

// RESPONSIVE MENU
var menuPrimary = document.getElementById("menu-primary-id")
var secondaryMenu = document.getElementById('menu-secondary-id')
var menuIcon = document.getElementById("menu-icon")

document.addEventListener('click', function (e) {
  if ( e.target.classList.contains('bar') ) {
      if (menuPrimary.classList.contains("activeMenu") ) {
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
}, false);

// CLOSE MENU ON CLICK ANYWHERE
window.onclick = function(e) {
  if (!e.target.classList.contains('bar')) {
    if (menuPrimary.classList.contains('activeMenu')) {
      menuPrimary.classList.remove('activeMenu')
      menuIcon.classList.remove("open")
    }
  }
}

// MOVE ROTATING IMAGE
var divImg = document.getElementById('rotate-img')

function moveElement(element){
  var mousePosition
  var offset = [0,0]
  var isDown = false

  if(element){
    element.addEventListener('mousedown', function(e) {
      isDown = true
      offset = [
        element.offsetLeft - e.clientX,
        element.offsetTop - e.clientY
      ]
    }, true)

    element.addEventListener('mouseup', function() {
      console.log("MOUSE UP")
      isDown = false
    }, true)

    element.addEventListener('mousemove', function(e) {
      e.preventDefault()
      if (isDown) {
        mousePosition = {
          x : e.clientX,
          y : e.clientY
        }
        element.style.left = (mousePosition.x + offset[0]) + 'px'
        element.style.top  = (mousePosition.y + offset[1]) + 'px'
      }
    }, true)
  } else {
    console.log("NOT MOVING ELEMENT")
  }
}
moveElement(divImg)



// var promise = document.querySelector('audio').play()
// if (promise !== undefined) {
//   promise.catch(function(error){
//     console.log("AUDIO AUTOPLAY WAS PREVENTED")
//       // Auto-play was prevented
//       // Show a UI element to let the user manually start playback
//   }).then(function(){
//       // Auto-play started
//       console.log("WHAT NOW?")
//       // SAFARI.play()
//   })
// }

// const audio = new window.Audio()
// audio.src =
//   'https://raw.githubusercontent.com/vnglst/autoplay-tutorial/master/mp3/modem-sound.mp3'
//
// const mockedPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const src = 'https://raw.githubusercontent.com/vnglst/autoplay-tutorial/master/mp3/winamp.mp3'
//     return resolve(src)
//   }, 500)
// })
//
// btn.onclick = (e) => {
//   mockedPromise.then(src => {
//     audio.src = src
//     audio.play()
//   })
// }

//  SLIDER FRONT PAGE
// var slideIndex = 0
//
// function carousel() {
//   var x = document.getElementsByClassName("mySlides")
//   if(x){
//     for (var i = 0  i < x.length  i++) {
//       x[i].style.display = "none"
//     }
//     slideIndex++
//     if (slideIndex > x.length) {
//       slideIndex = 1
//     }
//     x[slideIndex-1].style.display = "block"
//     setTimeout(carousel, 2500)
//   }
// }
// carousel()
