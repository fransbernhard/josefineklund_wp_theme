
var $ =  jQuery
var divImg = document.getElementById('rotate-img')

window.onload = function init(){
  // INSTAGRAM

  num_photos = 30

  // GET INSTAGRAM POSTS
  if(location.pathname == "/jose2/"){
    console.log("YOU ARE AT ROOT")
    $.ajax({
     url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
     dataType: 'jsonp',
     type: 'GET',
     data: {access_token: token, count: num_photos},
     success: function(data){
       console.log(data)
       for( x in data.data ){
         $('#insta').append('<li><a target="_blank" href="'+data.data[x].link+'" class="insta-post" style="background-image: url('+data.data[x].images.low_resolution.url+'"></a></li>')
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

      divImg.style.zIndex = 0
    } else {
      console.log("NOT SAFARI")
      SAFARI.style.display="none"
      OTHER_BROWSER.style.display="block"

      // MOVE ROTATING ELEMENT
      moveElementNotSafari(divImg)
    }
  } else {
    console.log("YOU ARE NOT AT ROOT")
  }
}

// MODAL IMAGE
function openModal(URL, TITLE, ID, CAPTION){
  console.log("CAPTIONEEE: " + CAPTION);
  var modal = document.getElementById('myModal')
  var modalImg = document.getElementById("modal-img")

  var caption = document.getElementById("caption")
  var captionH3 = caption.getElementsByTagName('h3')[0]
  var captionA = caption.getElementsByTagName('a')[0]

  var span = document.getElementsByClassName("close")[0]
  var newTitle = encodeURIComponent(TITLE.trim())

  // var captionP = caption.getElementsByTagName('p')[0]
  // var captionH3 = document.getElementById("thumbnail-h3")
  // var captionP = document.getElementById("thumbnail-p")
  // var captionA = caption.getElementsByTagName('a')[0]

  modal.style.display = "flex"
  captionH3.innerHTML = TITLE
  modalImg.src = URL

  captionA.href = "mailto:josefineklundmail@gmail.com?Subject=" + newTitle
  captionA.innerHTML = "Contact me"

  span.onclick = function() {
    modal.style.display = "none"
  }
}

// SLIDER
function changeSlide(ID){
  console.log("CHANGEID: " + ID)
}

// RESPONSIVE MENU
var menuPrimary = document.getElementById("menu-primary-id")
var secondaryMenu = document.getElementById('menu-secondary-id')
var menuIcon = document.getElementById("menu-icon")

document.addEventListener('click', function (e) {
  if ( e.target.classList.contains('bar') ) {
    if(menuPrimary) {
      if (menuPrimary.classList.contains("activeMenu")) {
        menuPrimary.classList.remove("activeMenu")
      } else {
        menuPrimary.classList.add("activeMenu")
      }
    } else if (secondaryMenu) {
      if (secondaryMenu.classList.contains("activeMenu")) {
        secondaryMenu.classList.remove("activeMenu")
      } else {
        secondaryMenu.classList.add("activeMenu")
      }
    } else {
      console.log("Neather menus exists")
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
    if(menuPrimary){
      if (menuPrimary.classList.contains('activeMenu')) {
        console.log("REMOVE ACTIVE CLASS FROM PRIMARY MENU")
        menuPrimary.classList.remove('activeMenu')
        menuIcon.classList.remove("open")
      } else {
        console.log("PRIMARY MENU CONTAINS ACTIVE CLASS")
      }
    } else if (secondaryMenu) {
      if (secondaryMenu.classList.contains('activeMenu')){
        console.log("REMOVE ACTIVE CLASS FROM SECONDARY MENU")
        secondaryMenu.classList.remove('activeMenu')
        menuIcon.classList.remove("open")
      } else {
        console.log("SECONDARY MENU CONTAINS ACTIVE CLASS")
      }
    }

  } else {
    console.log("CLICKED OUTSIDE BAR")
  }
}

// MOVE ROTATING IMAGE
var timeDownUp = null;

function moveElementNotSafari(element) {
  var mousePosition
  var offset = [0,0]
  var isDown = false

  if(element){
    console.log(element);
    element.addEventListener('mousedown', function (e) {
        timeDownUp = new Date().getTime();
        // console.log('mousedown', e.pageX, e.pageY, e.timeStamp);
        isDown = true
        offset = [
          element.offsetLeft - e.clientX,
          element.offsetTop - e.clientY
        ]
    }.bind(this));
    element.addEventListener('mouseup', function (e) {
        timeDownUp = new Date().getTime();
        isDown = false
        // console.log('mouseup', e.pageX, e.pageY, e.timeStamp);
    }.bind(this));
    element.addEventListener('mousemove', function (e) {
        var timeMove = new Date().getTime();
        timeDownUp += 10;
        if (timeMove > timeDownUp) {
            // console.log('mousemove', e.pageX, e.pageY, e.timeStamp);
            if (e.which === 1) {
                console.log('mousemove DRAG', e.pageX, e.pageY, e.timeStamp);
                e.preventDefault()
                if (isDown) {
                  mousePosition = {
                    x : e.clientX,
                    y : e.clientY
                  }
                  element.style.left = (mousePosition.x + offset[0]) + 'px'
                  element.style.top  = (mousePosition.y + offset[1]) + 'px'
                }
            }
        } else {
            timeDownUp = null;
        }
      }.bind(this));
    } else {
      console.log("NOT MOVING ELEMENT")
    }
}

// CHANGE BACKGROUND ON PROJECT BTN
var i = 0;
function change() {
  var img = document.getElementById("projects-img");
  if(img){
    var color = ["#a29bfe", "#00cec9", "#6c5ce7", "#74b9ff"];
    img.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
  }
}
setInterval(change, 1000);





// function moveElement(element){
//   var mousePosition
//   var offset = [0,0]
//   var isDown = false
//
//   if(element){
//     element.addEventListener('mousedown', function(e) {
//       isDown = true
//       console.log("MOUSE DOWN")
//       offset = [
//         element.offsetLeft - e.clientX,
//         element.offsetTop - e.clientY
//       ]
//     }, true)
//
//     element.addEventListener('mouseup', function() {
//       console.log("MOUSE UP")
//       isDown = false
//     }, true)
//
//     element.addEventListener('mousemove', function(e) {
//       e.preventDefault()
//       console.log("MOUSE MOVE")
//       if (isDown) {
//         mousePosition = {
//           x : e.clientX,
//           y : e.clientY
//         }
//         element.style.left = (mousePosition.x + offset[0]) + 'px'
//         element.style.top  = (mousePosition.y + offset[1]) + 'px'
//       }
//     }, true)
//   } else {
//     console.log("NOT MOVING ELEMENT")
//   }
// }
// moveElement(divImg)

// var audioElement = document.getElementsByClassName("wp-audio-shortcode")[0]
// var audioElement = document.getElementById("audio-5-1_html5")
// console.log("AUDIO: " + audioElement)
// console.log(audioElement.autoplay)
// audioElement.play()

// audioElement.autoplay = true
// audioElement.load()

// if (audioElement !== undefined) {
//   audioElement.then(function() {
//     // Automatic playback started!
//   }).catch(function(error) {
//     // Automatic playback failed.
//     // Show a UI element to let the user manually start playback.
//   })
// }

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
