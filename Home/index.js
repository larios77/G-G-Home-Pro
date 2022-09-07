// function scrollTo
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)

// slider

let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
    muestraSlides( indice+=n );
}

function posicionSlide(n){
    muestraSlides(indice=n);
}
setInterval(function tiempo(){
    muestraSlides(indice+=1)
},4000);

function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('slider');
    let barras = document.getElementsByClassName('dots');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active", "");
    }

    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active';

}

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