var $ =  jQuery
var token = '1466267444.6d74351.c025731af1b644c8a4f1fe6a67fb9d46',
userid = "1466267444",
num_photos = 30

window.onload = function init(){

  // GET INSTAGRAM POSTS
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

  // MOVE ROTATING IMAGE
  var divImg = document.getElementById('rotate-img')
  var mousePosition
  var offset = [0,0]
  var isDown = false

  function moveElement(input){
    if(input){
      input.addEventListener('mousedown', function(e) {
        console.log("MOUSE DOWN")
        isDown = true
        offset = [
          input.offsetLeft - e.clientX,
          input.offsetTop - e.clientY
        ]
      }, true)

      divImg.addEventListener('mouseup', function() {
        console.log("MOUSE UP")
        isDown = false
      }, true)

      divImg.addEventListener('mousemove', function(e) {
        e.preventDefault()
        if (isDown) {
          mousePosition = {
            x : e.clientX,
            y : e.clientY
          }
          input.style.left = (mousePosition.x + offset[0]) + 'px'
          input.style.top  = (mousePosition.y + offset[1]) + 'px'
        }
      }, true)
    } else {
      console.log("Not moving element")
    }
  }
  moveElement(divImg)


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
}


// MODAL IMAGE
function clicky(URL){
  var modal = document.getElementById('myModal')

  var modalImg = document.getElementById("img")
  var captionText = document.getElementById("caption")

  modal.style.display = "flex"
  modalImg.src = URL

  var span = document.getElementsByClassName("close")[0]
  span.onclick = function() {
    modal.style.display = "none"
  }
}

// RESPONSIVE MENU
var menuPrimary = document.getElementById("menu-primary-id")

function menuFunction(){
  var menuIcon = document.getElementById("menu-icon")
  if (menuPrimary.classList.contains("activeMenu")) {
    menuPrimary.classList.remove("activeMenu")
  } else {
    menuPrimary.classList.add("activeMenu")
  }
}

// CLOSE MENU ON CLICK
window.onclick = function(e) {
  if (!e.target.matches('#menu-icon')) {
    if (menuPrimary.classList.contains('activeMenu')) {
      menuPrimary.classList.remove('activeMenu');
    }
  }
}
