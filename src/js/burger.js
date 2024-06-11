let burger = document.querySelector('.burger')
let search = document.querySelector('.header__item')
let itemNone = document.querySelector('.header__item-none')
let linkNone = document.querySelector('.header__link')
let header = document.querySelector('.header')
let decor = document.querySelector('.header__decorative')
let body = document.querySelector('.body')


burger.addEventListener('click', function(evt){
    evt.preventDefault();
    burger.classList.toggle('open__burger')
    search.classList.toggle('open__search')
    itemNone.classList.toggle('header__link--none')
    linkNone.classList.toggle('header__link--none')
    header.classList.toggle('open')
    decor.classList.toggle('header__decorative--none')
    body.classList.toggle('scroll')
})

if (document.documentElement.clientWidth > 1280) {
    header.classList.toggle("open");
  }