dataModalButton = document.querySelectorAll('[data-modal-button]');
dataModalClose = document.querySelectorAll('[data-modal-close]');
dataModal = document.querySelectorAll('[data-modal]');


// Клик по модалке открывает модалку
dataModalButton.forEach(function(modal){
    modal.addEventListener('click', function(){
        console.log(this.dataset.modalButton )
        modalWindow = document.querySelector('#' + this.dataset.modalButton)
        console.log(modalWindow)
        modalWindow.classList.remove('hidden');
        modalWindow.querySelector('.modal-window').addEventListener('click', function(e){
            e.stopPropagation()
        })
    
    })
} )
// Закрываем по нажатию закрыть
dataModalClose.forEach(function(modal){
    modal.addEventListener('click', function(){
        // modalWindow.classList.add('hidden');
        this.closest('[data-modal]').classList.add('hidden')
    })
} )
// Закрыть по окну

dataModal.forEach( function(item){
    item.addEventListener('click', function(){
        this.classList.add('hidden')
    })
})
