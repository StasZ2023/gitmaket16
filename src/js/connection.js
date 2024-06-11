let message = document.querySelectorAll('.contact__message');
let Open = document.querySelector('.connection');
let close = document.querySelector('.connection__btn');
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

    