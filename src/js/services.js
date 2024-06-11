let servicBtn = document.querySelector('.services__button')
let servicText = document.querySelector('.services__text')
let servisBtnText = document.querySelector('.services__button--text')

servicBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    servicText.classList.toggle('open--text')

    if(servisBtnText.textContent == 'Читать далее'){
        servisBtnText.textContent = 'Скрыть'
    }
    else if(servisBtnText.textContent == 'Скрыть'){
        servisBtnText.textContent = 'Читать далее'
    }
})