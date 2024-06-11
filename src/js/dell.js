let message = document.querySelectorAll('.contact__phone');
let Open = document.querySelector('.dell');
let close = document.querySelector('.dell__btn');
let body = document.querySelector('.body')
for(let btn of message){
    btn.addEventListener('click', function(evt){
        evt.preventDefault();
        Open.classList.add('open')
        body.classList.add('scroll')
    })
}
close.addEventListener('click', function(evt){
    evt.preventDefault();
    Open.classList.remove('open')
    body.classList.remove('scroll')
})