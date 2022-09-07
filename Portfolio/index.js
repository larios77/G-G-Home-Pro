// function scrollTo
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)

//mapa google

function iniciarMap(){
    let coord = {lat:40.231608 ,lng: -74.7133338};
    let map = new google.maps.Map(document.querySelector('.map'),{
      zoom: 15,
      center: coord
    });
    let marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

// menu responsive

const btnMenu = document.querySelector(".btnMenu");
const menu = document.querySelector(".menu__desple");

btnMenu.addEventListener("click",function() {
    menu.classList.toggle("showMenu");
})