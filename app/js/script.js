
var $ =  jQuery
var divImg = document.getElementById('rotate-img')

window.onload = function init(){
  // INSTAGRAM
  
  num_photos = 30

  // GET INSTAGRAM POSTS
  $.ajax({
   url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
   dataType: 'jsonp',
   type: 'GET',
   data: {access_token: token, count: num_photos},
   success: function(data){
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
}

// MODAL IMAGE
function openModal(URL, TITLE, ID, CAPTION){
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
      console.log("REMOVE ACTIVE CLASS FROM PRIMARY MENU")
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
var timeDownUp = null;

function moveElementNotSafari(element) {
  var mousePosition
  var offset = [0,0]
  var isDown = false

  if(element){
    element.addEventListener('mousedown', function (e) {
      timeDownUp = new Date().getTime();
      isDown = true
      offset = [
        element.offsetLeft - e.clientX,
        element.offsetTop - e.clientY
      ]
    }.bind(this));
    element.addEventListener('mouseup', function (e) {
      timeDownUp = new Date().getTime();
      isDown = false
    }.bind(this));
    element.addEventListener('mousemove', function (e) {
      var timeMove = new Date().getTime();
      timeDownUp += 10;
      if (timeMove > timeDownUp) {
        if (e.which === 1) {
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
